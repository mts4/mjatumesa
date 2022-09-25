// Styles
import Title from './styles'

const TitleSection = ({ textFirst, colorTextFirst, textSecond, fontSize }) => {
  return (
    <Title fontSize={fontSize} colorTextFirst={colorTextFirst}>
      {textFirst} <span>{textSecond}</span>
    </Title>
  )
}

export default TitleSection
