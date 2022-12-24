import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Delivery from '../pages/Delivery'

const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/delivery' element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesNav
