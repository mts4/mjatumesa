import { useState } from 'react'
// Input Range
import Slider from 'rc-slider'
// Icons
import Icon from 'cheffify-react-icons'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
// Styles
import Wrapper from './styles'

const Filter = () => {
  const [inputRange, setInputRange] = useState([])
  console.log(inputRange)
  return (
    <Wrapper>
      <div className='title'>
        <Icon name='angle-down' size={20} color='#262C57' />
        <h5>Filtrar</h5>
      </div>
      <div className='category'>
        <div className='category__title'>
          <h5>Categoría</h5>
          <Icon name='angle-down' size={15} color='#262C57' />
        </div>
        <div className='category__buttons'>
          <Icon name='angle-down' size={15} color='#D77466' />
          <button>Carnes Rojas</button>
        </div>
        <div className='category__buttons'>
          <Icon name='angle-down' size={15} color='#D77466' />
          <button>Guisos</button>
        </div>
        <div className='category__buttons'>
          <Icon name='angle-down' size={15} color='#D77466' />
          <button>Carnes Blancas</button>
        </div>
      </div>
      <div className='category'>
        <div className='category__title'>
          <h5>Precio</h5>
          <Icon name='angle-down' size={15} color='#262C57' />
        </div>
        <div className='category__price'>
          <Slider
            range
            allowCross={false}
            defaultValue={[1801, 25499]}
            onChange={price => setInputRange(price)}
            min={1800}
            max={25500}
          />
          <div className='category__price-span'>
            <span>
              {inputRange.length > 0 ? formatPriceCLP(inputRange[0]) : '$1.800'}
            </span>
            <span>
              {inputRange.length > 0
                ? formatPriceCLP(inputRange[1])
                : '$25.500'}
            </span>
          </div>
        </div>
      </div>
      <div className='category'>
        <div className='category__title'>
          <h5>Formato</h5>
          <Icon name='angle-down' size={15} color='#262C57' />
        </div>
        <div className='category__checkbox'>
          <input
            type='checkbox'
            name='format'
            id='format'
            className='category__checkbox-check'
          />
          <label htmlFor='format'>1 Persona</label>
        </div>
        <div className='category__checkbox'>
          <input
            type='checkbox'
            name='format'
            id='format'
            className='category__checkbox-check'
          />
          <label htmlFor='format'>4 Personas</label>
        </div>
        <div className='category__checkbox'>
          <input
            type='checkbox'
            name='format'
            id='format'
            className='category__checkbox-check'
          />
          <label htmlFor='format'>8 Personas</label>
        </div>
      </div>
    </Wrapper>
  )
}

export default Filter
