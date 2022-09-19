import ProductCard from '../../products/productCard'
import TitleSection from '../../../molecules/TitleSection'
import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
import Button from '../../../molecules/Button'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper from './styles'

const SecondSection = () => {
  return (
    <Wrapper>
      <ArrowScrollDown />
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
    </Wrapper>
  )
}

export default SecondSection
