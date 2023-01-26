type SwipeHandlerReturnType = never | void | any | undefined;
type SwipeHandlerPromise = Promise<SwipeHandlerReturnType>;
type SubcribeMethod = ( selector: SubscripteeObject['selector'], handler: SwipeHandler ) => SubscripteeObject;
export type SwipeDirection = 'left' | 'right' | 'none' | 'up' | 'down';
export type SwipeHandler = ( direction: string ) => SwipeHandlerReturnType | ( ( direction?: string ) => SwipeHandlerPromise );
export type SwipeSubsciptionServiceInstance = {
    subscribe: SubcribeMethod;
};
export interface SubscripteeObject {
    id: string;
    selector: string;
    processedSelector: string;
    handler: SwipeHandler;
    unsubscribe: () => void;
}

class SwipeSubsciptionService {
    static subscriptees: SubscripteeObject[] = [];
    static isInitiated = false;
    static threshold = 150; //required min distance traveled to be considered swipe
    static restraint = 100; // maximum distance allowed at the same time in perpendicular direction
    static allowedTime = 1000; // maximum time allowed to travel that distance
    static touchSurface = document.documentElement;
    static swipeDirection: SwipeDirection = 'none';
    static startX = 0;
    static startY = 0;
    static distanceX = 0;
    static distanceY = 0;
    static elapsedTime = 0;
    static startTime = 0;

   
    static getInstance = (): SwipeSubsciptionServiceInstance => ( {
        subscribe: this.subscribe.bind( this ),
    } );

    static init = (): void => {
        if ( !this.isInitiated ) {
            this.touchSurface.addEventListener(
                'touchstart',
                this.touchStartHandler,
                { passive: false } 
            );
            this.touchSurface.addEventListener(
                'touchend',
                this.touchEndHandler,
                { passive: false } 
            );
            this.isInitiated = true;
        }
    };

    static terminate = (): void => {
        if ( this.isInitiated ) {
            this.touchSurface.removeEventListener(
                'touchstart',
                this.touchStartHandler 
            );
            this.touchSurface.removeEventListener(
                'touchend',
                this.touchEndHandler 
            );
            this.subscriptees = [];
            this.isInitiated = false;
        }
    };

    static processSelector( selector: SubscripteeObject['selector'] ): SubscripteeObject['selector'] {
        const hasNot = /:not\([^)]+\)/gi.test( selector );
        return selector
            .split( /, ?/g )
            .map( selectorPart => ( !hasNot ? `${ selectorPart }, ${ selectorPart } *` : selector ) )
            .join( ', ' );
    }

    static subscribe = ( selector: SubscripteeObject['selector'], handler: SwipeHandler ): SubscripteeObject => {
        const filteredSubscriptees = this.subscriptees.filter( subscriptee => subscriptee.selector === selector );
        const alreadySubsribed = filteredSubscriptees.length > 0;
        if ( alreadySubsribed ) return filteredSubscriptees[ 0 ];

        const id = String( Date.now() );
        const localUnsubscribe = this.unsubscribe;
        const subscriptee: SubscripteeObject = {
            id: id,
            selector: selector,
            processedSelector: this.processSelector( selector ),
            handler: handler,
            // unsubscribe method for subscriptee instance
            unsubscribe: function () {
                localUnsubscribe( this.id );
            },
        };
        this.subscriptees.push( subscriptee );
        return subscriptee;
    };

    static unsubscribe = ( id: SubscripteeObject['id'] ): void => {
        this.subscriptees.forEach( ( subscriptee, index ) => subscriptee.id === id && this.subscriptees.splice(
            index,
            1 
        ) );
    };

    static handleSwipe = ( target: HTMLElement ) => {
        this.subscriptees.forEach( ( { processedSelector, handler } ) => {
            if ( target && target.matches( processedSelector ) ) {
                handler && handler( this.swipeDirection );
            }
        } );
    };

    static setSwipeDirection = (): void => {
        const isX = Math.abs( this.distanceX ) >= this.threshold && Math.abs( this.distanceY ) <= this.restraint;
        const isY = Math.abs( this.distanceY ) >= this.threshold && Math.abs( this.distanceX ) <= this.restraint;
        if ( this.elapsedTime <= this.allowedTime ) {
            // first condition for awipe met
            if ( isX ) {
                // 2nd condition for horizontal swipe met
                this.swipeDirection = this.distanceX < 0 ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
            } else if ( isY ) {
                // 2nd condition for vertical swipe met
                this.swipeDirection = this.distanceY < 0 ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
            }
        }
    };

    static touchStartHandler = ( event: TouchEvent ): void => {
        const touchobj = event.changedTouches[ 0 ];
        this.swipeDirection = 'none';
        this.startX = touchobj.pageX;
        this.startY = touchobj.pageY;
        this.startTime = new Date().getTime(); // record time when finger first makes contact with surface
    };

    static touchEndHandler = ( event: TouchEvent ): void => {
        const target = event.target as HTMLElement;
        const touchobj = event.changedTouches[ 0 ];
        this.distanceX = touchobj.pageX - this.startX; // get horizontal dist traveled by finger while in contact with surface
        this.distanceY = touchobj.pageY - this.startY; // get vertical dist traveled by finger while in contact with surface
        this.elapsedTime = new Date().getTime() - this.startTime; // get time elapsed
        this.setSwipeDirection();
        this.handleSwipe( target );
    };
}

// initialize SwipeSubscription service
SwipeSubsciptionService.init();
// export instance of subscription service
export default SwipeSubsciptionService.getInstance();
