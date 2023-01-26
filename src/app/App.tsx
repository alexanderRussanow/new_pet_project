import { getUserIsInited, userActions } from '@/entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '../shared/lib/utility/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    // redux hooks
    const dispatch = useAppDispatch();
    const userIsInitialized = useSelector( getUserIsInited );

    useEffect(
        () => {
            dispatch( userActions.initUserData() );
        },
        [
            dispatch
        ] 
    );

    return (
        <div className={ classNames( 'app' ) }>
            <Suspense fallback=''>
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    {userIsInitialized ? <AppRouter /> : null}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
