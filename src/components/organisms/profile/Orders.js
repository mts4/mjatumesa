import { useState } from 'react'
// Organism
import TableOrder from './TableOrder'
import Address from './Address'
// Styles
import { ButtonsSwitch } from './styles'

const Orders = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <ButtonsSwitch>
      <div className='buttons'>
        <button
          className={`buttons__btn ${toggle && 'active'}`}
          onClick={() => setToggle(!toggle)}
        >
          Mis pedidos
        </button>
        <button
          className={`buttons__btn ${!toggle && 'active'}`}
          onClick={() => setToggle(!toggle)}
        >
          Mis direcciones
        </button>
      </div>
      {toggle ? <TableOrder /> : <Address />}
    </ButtonsSwitch>
  )
}

export default Orders
