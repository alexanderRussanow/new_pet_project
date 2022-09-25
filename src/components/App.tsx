import { Link, Route, Routes } from 'react-router-dom';
import { BoardPageLazy } from './pages/board/Board.lazy';
import { ContactPageLazy } from './pages/contact/Contact.lazy';
import { HomePageLazy } from './pages/home/Home.lazy';
import { useTheme } from '../theme/useTheme';
// styles
import '../styles/index.scss';
import { classNames } from '../utility/UtilityMethods';


const App = () => {
  const { theme, toggleTheme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>home</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/board'>board</Link>
      <button onClick={ toggleTheme } >Change theme</button>
         <Routes>
            <Route path='/' element={ <HomePageLazy/> } />
            <Route path='/contact' element={ <ContactPageLazy /> } />
            <Route path='/board' element={ <BoardPageLazy /> } />
         </Routes>
   </div>
   )
}

export default App