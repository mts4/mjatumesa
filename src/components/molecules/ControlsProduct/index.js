// Styled
import ControlsBox from './styles'

const ControlsProduct = ({
  handleClickDecrement,
  handleClickIncrement,
  title,
  quantity,
}) => {
  return (
    <ControlsBox className='controls'>
      <button
        className='controlsBtn'
        onClick={() => handleClickDecrement(quantity, title, 'rest')}
      >
        -
      </button>
      <p className='controlsQuantityText'>{quantity}</p>
      <button
        className='controlsBtn'
        onClick={() => handleClickIncrement(quantity, title, 'sum')}
      >
        +
      </button>
    </ControlsBox>
  )
}

export default ControlsProduct
