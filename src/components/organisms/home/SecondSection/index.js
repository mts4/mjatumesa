import ProductCard from '../../products/productCard'
import TitleSection from '../../../molecules/TitleSection'
import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
import Button from '../../../molecules/Button'
// Svg
import bgLeft from '../../../../assets/images/svg/img/bg-secondSection-left.svg'
import bgRight from '../../../../assets/images/svg/img/bg-secondSection-right.svg'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper from './styles'

const SecondSection = () => {
  return (
    <Wrapper>
      <ArrowScrollDown bgColor={COLORS.roseLight} color={COLORS.salmon} />
      <TitleSection textFirst='¿Qué ' textSecond='comemos hoy?' />
      <p className='description'>
        Sabemos que cuesta decir quién es mejor, si el papá o la mamá. A
        nosotros también, por eso dejamos una sugerencia, tú eliges.
      </p>
      <div className='products'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Button
        text='Más platos'
        fontSize={17}
        color={COLORS.white}
        bgColor={COLORS.violetDark}
        width={240}
        borderColor={COLORS.violetDark}
      />
      <img src={bgLeft} className='bgLeft' />
      <img src={bgRight} className='bgRight' />
    </Wrapper>
  )
}

export default SecondSection
