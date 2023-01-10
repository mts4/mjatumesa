// Utils
import { useState } from 'react'
import ImageExample from '../../../assets/images/jpg/food/arrozblanco.jpg'
// Styles
import { Table } from './styles'

const TableOrder = () => {
  const [isCollapse, setIsCollapse] = useState(false)

  const handleClickCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  return (
    <Table>
      <div className='row'>
        <p className='row__title'>Fecha del pedido</p>
        <p className='row__title'>Valor</p>
        <p className='row__title'>&#32;</p>
      </div>
      <div className='row'>
        <div className='row__content'>
          <div className='row__content-info'>
            <p className='row__content-info-txt'>25/10/2022</p>
            <p className='row__content-info-txt'>$25.550</p>
            <p className='row__content-info-txt'>
              <button onClick={handleClickCollapse}>Detalles</button>
            </p>
          </div>
          <div
            className='row__content-accordion'
            style={{
              maxHeight: isCollapse ? '300px' : '0px',
            }}
          >
            <div className='box'>
              <div className='box__left'>
                <img src={ImageExample} />
                <p>Asado aleman con salsa mostaza</p>
              </div>
              <div className='box__right'>
                <p>$3.550</p>
              </div>
            </div>
            <button className='row__content-accordion-btn'>
              Repetir pedido
            </button>
          </div>
        </div>
      </div>
    </Table>
  )
}

export default TableOrder
