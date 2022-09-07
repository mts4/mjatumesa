import Button from '../../../molecules/Button'
import Icon from '../../../atoms/icon'
// Utils
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper from './styles'
const TopSection = () => {
  return (
    <Wrapper>
      <div className='blockLeft'>
        <h1 className='blockLeft__title'>
          Come como <span>en casa</span>
        </h1>
        <p className='blockLeft__description'>
          Platos de primera, cocinados de manera artesanal con productos
          seleccionados,{' '}
          <strong className='important'>sin aditivos ni conservantes</strong>.
          Recibe nuestra comida directamente en tu casa.{' '}
          <strong>¡Garantía de calidad!</strong>
          <Icon
            name='emoteLove'
            width={21}
            height={21}
            style={{ marginLeft: 20, position: 'absolute' }}
          />
        </p>
        <div className='blockLeft__buttons'>
          <Button
            text='Hacer pedido'
            fontSize={17}
            color={COLORS.white}
            bgColor={COLORS.salmon}
            width={240}
            borderColor={COLORS.salmon}
          />
          <Button
            text='Saber más'
            fontSize={17}
            color={COLORS.salmon}
            bgColor={COLORS.white}
            width={240}
            borderColor={COLORS.salmon}
            customStyle={{ marginLeft: 15 }}
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default TopSection
