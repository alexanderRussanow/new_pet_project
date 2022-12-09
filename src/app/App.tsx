import { userActions, getUserIsInited } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from '../shared/lib/utility/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    // redux hooks
    const dispatch = useDispatch();
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
