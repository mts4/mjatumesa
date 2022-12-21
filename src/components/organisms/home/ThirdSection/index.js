import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
import TitleSection from '../../../molecules/TitleSection'
import Button from '../../../molecules/Button'
import ButtonCircleDown from '../../../molecules/ButtonCircleDown'
// Svg
import IconStore from '../../../../assets/images/svg/icons/icon-store.svg'
import bgLeft from '../../../../assets/images/svg/img/bg-third-left.svg'
import bgRight from '../../../../assets/images/svg/img/bg-third-right.svg'

// Utils
import { LIST_INFO } from '../../../../utils/const'
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper, { ItemsBox, Item } from './styles'
import { Link } from 'react-router-dom'

const ThirdSection = () => {
  return (
    <Wrapper id='pensamos'>
      <ArrowScrollDown
        bgColor={COLORS.white}
        color={COLORS.salmon}
        sectionId='pensamos'
      />
      <TitleSection
        textFirst='Pensamos por ti. '
        textSecond='Resolvemos por ti.'
        textAlign='center'
      />
      <ItemsBox>
        {LIST_INFO.map((item, index) => (
          <Item key={index}>
            <img src={item.icon.type} />
            <p className='text'>{item.title}</p>
          </Item>
        ))}
      </ItemsBox>
      <Link to='/shop' className='link'>
        <Button
          iconLeft={IconStore}
          text='Visitar tienda'
          bgColor={COLORS.white}
          color={COLORS.salmon}
          iconLeftSize={27}
        />
      </Link>
      <ButtonCircleDown
        customStyle={{ marginTop: 40 }}
        sectionId='slideCocina'
      />
      <img src={bgLeft} className='bgLeft' />
      <img src={bgRight} className='bgRight' />
    </Wrapper>
  )
}

export default ThirdSection
