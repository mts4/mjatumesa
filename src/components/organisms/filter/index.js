import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import {
  filterProductsByCategory,
  filterProductsByPrice,
} from '../../../redux/productosSlice'
// Input Range
import Slider from 'rc-slider'
// Icons
import Icon from '../../molecules/Icon'
// Utils
import { formatPriceCLP } from '../../../utils/formats'
// Styles
import Wrapper from './styles'

const Filter = () => {
  const dispatch = useDispatch()
  const [inputRange, setInputRange] = useState([])

  const handleClickFilterByCategory = category =>
    dispatch(filterProductsByCategory(category))

  const handleChangeFilterByPrice = price => {
    setInputRange(price)
    dispatch(filterProductsByPrice(price))
  }

  return (
    <Wrapper>
      <div className='title'>
        <Icon name='icon-filter' width={20} height={20} />
        <h5>Filtrar</h5>
      </div>
      <div className='category'>
        <div className='category__title'>
          <h5>Categoría</h5>
          <Icon name='arrow-down' width={20} height={20} />
        </div>
        <div
          className='category__buttons'
          onClick={() => handleClickFilterByCategory('Carnes Rojas')}
        >
          <Icon name='icon-meat' width={20} height={20} />
          <button>Carnes Rojas</button>
        </div>
        <div
          className='category__buttons'
          onClick={() => handleClickFilterByCategory('Guisos')}
        >
          <Icon name='icon-cooking-pot' width={20} height={20} />
          <button>Guisos</button>
        </div>
        <div
          className='category__buttons'
          onClick={() => handleClickFilterByCategory('Carnes Blancas')}
        >
          <Icon name='icon-fish' width={20} height={20} />
          <button>Carnes Blancas</button>
        </div>
      </div>
      <div className='category'>
        <div className='category__title'>
          <h5>Precio</h5>
          <Icon name='arrow-down' width={20} height={20} />
        </div>
        <div className='category__price'>
          <Slider
            range
            allowCross={false}
            defaultValue={[1801, 25549]}
            onChange={price => handleChangeFilterByPrice(price)}
            min={1800}
            max={25550}
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
          <Icon name='arrow-down' width={20} height={20} />
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
