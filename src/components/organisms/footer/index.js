import Button from '../../molecules/Button'
// SVG
import Logo from '../../../assets/images/svg/logos/cheffify.svg'
import IconPhone from '../../../assets/images/svg/icons/icon-phone-color.svg'
import IconFB from '../../../assets/images/svg/icons/icon-fb.svg'
import IconIns from '../../../assets/images/svg/icons/icon-inst.svg'
import IconIn from '../../../assets/images/svg/icons/icon-linkedin.svg'
import IconMail from '../../../assets/images/svg/icons/icon-mail.svg'
import IconTel from '../../../assets/images/svg/icons/icon-phone.svg'
// Utils
import { COLORS } from '../../../theme/css/global.colors'
// Styles
import FooterBox from './styles'

const Footer = () => {
  return (
    <FooterBox>
      <hr />
      <div className='footer'>
        <div className='footer__top'>
          <img
            src={Logo}
            className='footer__top-logo'
            alt='Logo Cheffify Footer'
          />
          <Button
            text='Pide por Whatsapp'
            fontSize={16}
            color={COLORS.aqua}
            bgColor={COLORS.white}
            borderColor={COLORS.aqua}
            iconLeft={IconPhone}
            iconLeftSize={25}
          />
        </div>
        <div className='footer__middle'>
          <p>©2022 cheffify · Todos los derechos reservados</p>
          <div className='footer__middle-rrss'>
            <p>Contacto y redes sociales:</p>
            <ul>
              <li>
                <img src={IconFB} />
              </li>
              <li>
                <img src={IconIns} />
              </li>
              <li>
                <img src={IconIn} />
              </li>
              <li>
                <img src={IconMail} />
              </li>
              <li>
                <img src={IconTel} />
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom'>
          <p>
            <strong>Política de privacidad</strong>: nuestro sitio web emplea la
            información con el fin de proporcionar el mejor servicio posible,
            particularmente para mantener un registro de usuarios, de pedidos en
            caso que aplique, y mejorar nuestros productos y servicios. Es
            posible que sean enviados correos electrónicos periódicamente a
            través de nuestro sitio con ofertas especiales, nuevos productos y
            otra información publicitaria que consideremos relevante para usted
            o que pueda brindarle algún beneficio, estos correos electrónicos
            serán enviados a la dirección que usted proporcione y podrán ser
            cancelados en cualquier momento. <span>Seguir leyendo +</span>
          </p>
        </div>
      </div>
    </FooterBox>
  )
}

export default Footer
