import { classNames } from '../shared/lib/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

// styles
import './styles/index.scss';
import { Suspense } from 'react';


const App = () => {
  const { theme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
         <Navbar />
         <div className='page-content'>
            <Sidebar />
            <AppRouter />
         </div>
      </Suspense>
   </div>
   )
}

export default App