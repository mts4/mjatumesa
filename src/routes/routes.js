import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Delivery from '../pages/Delivery'
import Profile from '../pages/Profile'

const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesNav
