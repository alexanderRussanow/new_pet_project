import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { classNames } from '../shared/lib/utility/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

// styles
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div
            className={ classNames(
                'app',
                {},
                [
                    theme
                ] 
            ) }>
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
