import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from '../shared/lib/UtilityMethods';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { BoardPage } from 'pages/Board';
import { ContactPage } from 'pages/Contact';
import { HomePage } from 'pages/Home';

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
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/board' element={ <BoardPage /> } />
         </Routes>
      </Suspense>
   </div>
   )
}

export default App