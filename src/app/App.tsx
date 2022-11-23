import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from '../shared/lib/utility/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    const dispatch = useDispatch();

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
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
