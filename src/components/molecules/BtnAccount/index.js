import Icon from 'cheffify-react-icons'
// Redux
import { useSelector } from 'react-redux'
// Utils
import { totalItemsProducts } from '../../../utils/functions'
// Styles
import Wrapper from './styles'

const BtnAccount = ({
  text,
  bgColor,
  iconLeft,
  iconRight,
  iconColor,
  sizeIcon,
  onClickCesta,
}) => {
  const dataCesta = useSelector(state => state.products.dataCesta)

  return (
    <Wrapper bgColor={bgColor}>
      <Icon
        name={iconLeft}
        size={sizeIcon}
        color={iconColor}
        className='icon'
      />
      <p className='text'>{text}</p>
      <div className='separator' />
      <Icon
        name={iconRight}
        size={sizeIcon}
        color={iconColor}
        className='icon'
        onClick={onClickCesta}
      />
      {dataCesta.length > 0 && (
        <span className='notification'>{totalItemsProducts(dataCesta)}</span>
      )}
    </Wrapper>
  )
}

export default BtnAccount
