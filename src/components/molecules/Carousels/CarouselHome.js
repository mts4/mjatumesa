// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'
// Styled
import BoxCarousel from './styles'

const CarouselHome = ({ images }) => {
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
          <img src={images.type} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.type} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.type} />
        </SwiperSlide>
      </Swiper>
    </BoxCarousel>
  )
}

export default CarouselHome
