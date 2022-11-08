import { classNames } from '../shared/lib/UtilityMethods';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
// styles
import './styles/index.scss';


const App = () => {
  const { theme, toggleTheme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={ toggleTheme } >Change theme</button>
      <AppRouter />
   </div>
   )
}

export default App