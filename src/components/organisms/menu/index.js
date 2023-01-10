import { Link } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { showOrHideCesta } from '../../../redux/productosSlice'
// Molecules
import BtnOrderFood from '../../molecules/BtnOrderFood'
import BtnAccount from '../../molecules/BtnAccount'
// Icons
import Icon from 'cheffify-react-icons'
// Utils
import { URL_NAV } from '../../../utils/const'
import { COLORS } from '../../../theme/css/global.colors'
// Svg
import Logo from '../../../assets/images/svg/logos/cheffify.svg'
import MenuSvg from '../../../assets/images/svg/img/menu-bg.svg'
// Styles
import Menu from './styles'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleClickScroll = sectionId => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Menu>
      <div className='menu'>
        <div className='menu__elementsAbsolute'>
          <img
            src={MenuSvg}
            className='menu__elementsAbsolute-img'
            alt='Elemento absolute del menu'
          />
        </div>
        <Link to='/'>
          <img src={Logo} className='menu__logo' alt='Logo Cheffify' />
        </Link>

        <div className='menu__links'>
          {URL_NAV.map((item, index) => (
            <span
              className='menu__links-contain'
              key={index}
              onClick={() => handleClickScroll(item.menuAncla)}
            >
              <Icon
                name={item.icon.name}
                size={item.icon.size}
                color={COLORS.violetDark}
              />
              <p className='menu__links-contain--txt'>{item.name}</p>
            </span>
          ))}
        </div>
        <div className='menu__btns'>
          <BtnOrderFood
            text='Pedir comida'
            bgColor={COLORS.salmon}
            icon='bell'
            iconColor={COLORS.white}
            sizeIcon={15}
          />
          <BtnAccount
            text='Mi cuenta'
            bgColor={COLORS.violetDark}
            iconLeft='account'
            iconRight='cart'
            iconColor={COLORS.white}
            sizeIcon={15}
            onClickCesta={() => dispatch(showOrHideCesta())}
          />
        </div>
      </div>
    </Menu>
  )
}

export default Navbar
