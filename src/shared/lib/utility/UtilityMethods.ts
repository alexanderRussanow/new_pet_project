type Mods = Record<string, boolean | string | undefined>;

export const classNames = ( cls: string, mods: Mods = {}, additionalClasses: Array<string | undefined> = [] ) =>
    [
        cls,
        ...Object.entries( mods )
            .filter( ( [
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                _,
                value,
            ] ) => Boolean( value ) )
            .map( ( [
                className
            ] ) => className ),
        ...additionalClasses.filter( Boolean ),
    ]
        .join( ' ' )
        .replace(
            /\s+/g,
            ' ' 
        )
        .trimEnd();


export const isMobileDevice = (): boolean => {
    const isMobile = window.matchMedia;
    if ( !isMobile ) return false;
    const device = isMobile( '(pointer:coarse)' );
    return device.matches;
};
