import styled from 'styled-components'
import { COLORS } from '../../../../theme/css/global.colors'
import { device } from '../../../../theme/css/media.querys'
import SliderImageDesk from '../../../../assets/images/png/slider/carousel-1-desktop.png'
import SliderImageMobile from '../../../../assets/images/png/slider/carousel-1-mobile.png'
const BoxCarousel = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    @media (max-width: 500px) {
      border-radius: 11px;
      margin-bottom: 50px;
    }
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

  .containerSlider {
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    padding-left: 3rem;
    text-align: initial;
    background-image: url(${SliderImageDesk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 312px;
    border-radius: 20px;
    @media ${device.ipad} {
      background-image: url(${SliderImageMobile});
      height: auto;
      padding: 18px;
    }

    &__title {
      color: ${COLORS.violetDark};
      font-weight: 900;
      font-size: 40px;
      margin-bottom: 20px;
      font-size: 23px;
    }
    &__description {
      color: ${COLORS.violetDark};
      line-height: 25px;
      margin-bottom: 20px;
      max-width: 650px;
      @media ${device.ipad} {
        max-width: 100%;
        font-size: 17px;
      }
    }
    &__btn {
      color: ${COLORS.white};
      background-color: ${COLORS.violetDark};
      border: none;
      padding: 12px;
      border-radius: 20px;
      width: 100%;
      max-width: 140px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      font-family: 'Raleway';
      @media ${device.ipad} {
        display: block;
        max-width: 300px;
        margin: 0 auto;
      }
    }
  }

  .swiper-pagination-bullets {
    margin-top: 30px;
    display: block;
    position: relative;
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
