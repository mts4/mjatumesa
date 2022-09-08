import BtnOrderFood from '../../molecules/BtnOrderFood'
// Icons
import Icon from 'cheffify-react-icons'
// Utils
import { URL_NAV } from '../../../utils/const/menuNav'
import { COLORS } from '../../../theme/css/global.colors'
// Svg
import Logo from '../../../assets/images/svg/logos/cheffify.svg'
import MenuSvg from '../../../assets/images/svg/img/menu-bg.svg'
// Styles
import Menu from './styles'
import BtnAccount from '../../molecules/BtnAccount'

const Navbar = () => {
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
        <img src={Logo} className='menu__logo' alt='Logo Cheffify' />
        <div className='menu__links'>
          {URL_NAV.map((item, index) => (
            <span className='menu__links-contain' key={index}>
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
            sizeIcon={13}
          />
          <BtnAccount
            text='Mi cuenta'
            bgColor={COLORS.violetDark}
            iconLeft='account'
            iconRight='cart'
            iconColor={COLORS.white}
            sizeIcon={13}
          />
        </div>
      </div>
    </Menu>
  )
}

export default Navbar
