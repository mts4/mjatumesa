// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'
// Styled
import BoxCarousel from './styles'

const CarouselProductos = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>'
    },
  }
  return (
    <BoxCarousel>
      <Swiper pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <div className='containerSlider'>
            <h5 className='containerSlider__title'>
              Descubre el sabor <br /> de lo auténtico
            </h5>
            <p className='containerSlider__description'>
              Platos caseros que llegan directamente a tu mesa con todas sus
              propiedades y con el frescor de su sabor natural gracias a un
              eficiente proceso de congelado y cadena de distribución.
            </p>
            <button className='containerSlider__btn'>¡A comer!</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='containerSlider'>
            <h5 className='containerSlider__title'>
              Descubre el sabor <br /> de lo auténtico
            </h5>
            <p className='containerSlider__description'>
              Platos caseros que llegan directamente a tu mesa con todas sus
              propiedades y con el frescor de su sabor natural gracias a un
              eficiente proceso de congelado y cadena de distribución.
            </p>
            <button className='containerSlider__btn'>¡A comer!</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='containerSlider'>
            <h5 className='containerSlider__title'>
              Descubre el sabor <br /> de lo auténtico
            </h5>
            <p className='containerSlider__description'>
              Platos caseros que llegan directamente a tu mesa con todas sus
              propiedades y con el frescor de su sabor natural gracias a un
              eficiente proceso de congelado y cadena de distribución.
            </p>
            <button className='containerSlider__btn'>¡A comer!</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </BoxCarousel>
  )
}

export default CarouselProductos
