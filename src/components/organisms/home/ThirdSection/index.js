import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
import TitleSection from '../../../molecules/TitleSection'
import Button from '../../../molecules/Button'
import ButtonCircleDown from '../../../molecules/ButtonCircleDown'
// Utils
import { LIST_INFO } from '../../../../utils/const'
import { COLORS } from '../../../../theme/css/global.colors'
// Styles
import Wrapper, { ItemsBox, Item } from './styles'

const ThirdSection = () => {
  return (
    <Wrapper>
      <ArrowScrollDown bgColor={COLORS.white} />
      <TitleSection
        textFirst='Pensamos por ti. '
        textSecond='Resolvemos por ti.'
      />
      <ItemsBox>
        {LIST_INFO.map((item, index) => (
          <Item key={index}>
            <img src={item.icon.type} />
            <p className='text'>{item.title}</p>
          </Item>
        ))}
      </ItemsBox>
      <Button
        text='Visitar tienda'
        bgColor={COLORS.white}
        color={COLORS.salmon}
      />
      <ButtonCircleDown customStyle={{ marginTop: 40 }} />
    </Wrapper>
  )
}

export default ThirdSection
