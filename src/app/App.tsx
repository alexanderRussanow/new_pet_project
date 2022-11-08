import { classNames } from '../shared/lib/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

// styles
import './styles/index.scss';


const App = () => {
  const { theme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='page-content'>
         <Sidebar />
         <AppRouter />
      </div>
   </div>
   )
}

export default App