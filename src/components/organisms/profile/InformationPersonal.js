import { useState, useRef } from 'react'
// Uitls
import ProfileCover from '../../../assets/images/svg/img/persona2.svg'
import IconEdit from '../../../assets/images/svg/icons/icon-edit.svg'
// Styles
import ContainerInfo from './styles'

const InformationPersonal = () => {
  // Ref Focus
  const inputName = useRef(null)
  // const inputEmail = useRef(null)
  // const inputPhone = useRef(null)
  // States
  // const [username, setUsername] = useState('Moisés Andrade')
  // const [email, setEmail] = useState('moises.ao@gmail.com')
  // const [phone, setPhone] = useState('979868082')
  // Booleans
  const [isEditName, setIsEditName] = useState(false)

  return (
    <ContainerInfo>
      <img src={ProfileCover} className='profileImage' />
      <div className='blockInfo'>
        <div className='blockInfo__container'>
          <p
            className='blockInfo__container-name'
            style={{ display: isEditName ? 'none' : 'block' }}
          >
            Moisés Andrade
          </p>
          {/* <input
            className='blockInfo__container-inputName'
            ref={inputName}
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ display: isEditName ? 'block' : 'none' }}
          /> */}
          <img
            src={IconEdit}
            className='blockInfo__container-icon'
            onClick={() => {
              setIsEditName(!isEditName)
              inputName.current.focus()
            }}
          />
        </div>
        <div className='blockInfo__container'>
          <p className='blockInfo__container-txt'>moises.ao@gmail.com</p>
          {/* <input
            className='blockInfo__container-inputInfo'
            ref={inputEmail}
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          /> */}
          <img src={IconEdit} className='blockInfo__container-icon' />
        </div>
        <div className='blockInfo__container'>
          <p className='blockInfo__container-txt'>979868082</p>
          {/* <input
            className='blockInfo__container-inputInfo'
            ref={inputPhone}
            type='text'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          /> */}
          <img src={IconEdit} className='blockInfo__container-icon' />
        </div>
      </div>
    </ContainerInfo>
  )
}

export default InformationPersonal
