import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
// import NosotrosPage from '../pages/Nosotros'
import ProductosPage from '../pages/Productos'
// import SingleProductoPage from '../pages/SingleProducto'

const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='nosotros' element={<NosotrosPage />} /> */}
        <Route path='productos' element={<ProductosPage />} />
        {/* <Route path='productos/:id' element={<SingleProductoPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesNav
