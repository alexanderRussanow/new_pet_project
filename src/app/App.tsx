import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/UtilityMethods';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import {AppRouter} from './providers/router/ui/AppRouter';
// styles
import './styles/index.scss';


const App = () => {
  const { theme, toggleTheme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>home</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/board'>board</Link>
      <button onClick={ toggleTheme } >Change theme</button>
      <AppRouter />
   </div>
   )
}

export default App