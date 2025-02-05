
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Menu from './component/Menu'
import Products from './pages/Products'
import Jeans from './pages/Jeans'
import Shirt from './pages/Shirt'
import Users from './pages/Users'
import UsersDetails from './pages/UsersDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

      {/* {NESTED ROUTING} */}

      <Route path='/products/' element={<Products></Products>}>
            <Route index element={<Jeans></Jeans>}></Route>
            <Route path='jeans' element={<Jeans></Jeans>}></Route>
            <Route path='shirt' element={<Shirt></Shirt>}></Route>
          </Route>

      {/* DYANMIC ROUTING */}
      
          <Route path='/users/' element={<Users></Users>}>
            <Route path='usersDetails/:id' element={<UsersDetails></UsersDetails>} />
          </Route>

          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
