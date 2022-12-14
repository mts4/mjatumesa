import styled from 'styled-components'
import { COLORS } from '../../../theme/css/global.colors'

const BoxCarousel = styled.div`
  width: 100%;
  max-width: 517px;
  height: 378px;
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    text-align: center;
    line-height: 10px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: ${COLORS.salmonLight};
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: ${COLORS.salmon};
  }
`
export default BoxCarousel
