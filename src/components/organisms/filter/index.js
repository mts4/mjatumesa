import { useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  filterProductsByCategory,
  resetProducts,
  filterProductsByPrice,
  showOrHideFilterMobile,
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

  const [filtersActive, setFiltersActive] = useState({
    category: '',
    price: [1800, 25500],
    format: [],
  })

  const showMobileFilter = useSelector(state => state.products.showMobileFilter)

  const handleClickFilterByCategory = category => {
    if (filtersActive.category !== category) {
      setFiltersActive({
        ...filtersActive,
        category,
      })
    } else {
      setFiltersActive({
        ...filtersActive,
        category: '',
        price: [1800, 25500],
      })
      dispatch(resetProducts())
    }
  }

  const handleChangeFilterByPrice = price => {
    setFiltersActive({
      ...filtersActive,
      price,
    })
    dispatch(filterProductsByPrice(filtersActive))
  }

  const handleCloseFilterMobile = () => dispatch(showOrHideFilterMobile())

  useEffect(() => {
    filtersActive.category && dispatch(filterProductsByCategory(filtersActive))
  }, [filtersActive])

  return (
    <Wrapper showMobileFilter={showMobileFilter}>
      <div className='close' onClick={handleCloseFilterMobile}>
        <Icon name='icon-close' width={20} height={20} />
      </div>
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
          <button
            className={
              filtersActive.category === 'Carnes Rojas' ? 'active' : 'inactive'
            }
          >
            Carnes Rojas
          </button>
          {filtersActive.category === 'Carnes Rojas' && (
            <Icon
              name='check'
              width={20}
              height={20}
              customStyle={{ position: 'absolute', right: 0 }}
            />
          )}
        </div>
        <div
          className='category__buttons'
          onClick={() => handleClickFilterByCategory('Guisos')}
        >
          <Icon name='icon-cooking-pot' width={20} height={20} />
          <button
            className={
              filtersActive.category === 'Guisos' ? 'active' : 'inactive'
            }
          >
            Guisos
          </button>
          {filtersActive.category === 'Guisos' && (
            <Icon
              name='check'
              width={20}
              height={20}
              customStyle={{ position: 'absolute', right: 0 }}
            />
          )}
        </div>
        <div
          className='category__buttons'
          onClick={() => handleClickFilterByCategory('Carnes Blancas')}
        >
          <Icon name='icon-fish' width={20} height={20} />
          <button
            className={
              filtersActive.category === 'Carnes Blancas'
                ? 'active'
                : 'inactive'
            }
          >
            Carnes Blancas
          </button>
          {filtersActive.category === 'Carnes Blancas' && (
            <Icon
              name='check'
              width={20}
              height={20}
              customStyle={{ position: 'absolute', right: 0 }}
            />
          )}
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
            defaultValue={[1800, 25550]}
            value={[filtersActive.price[0], filtersActive.price[1]]}
            onChange={price => handleChangeFilterByPrice(price)}
            min={1800}
            max={25550}
          />
          <div className='category__price-span'>
            <span>{formatPriceCLP(filtersActive.price[0])}</span>
            <span>{formatPriceCLP(filtersActive.price[1])}</span>
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
