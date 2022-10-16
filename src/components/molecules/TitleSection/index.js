// Styles
import Title from './styles'

const TitleSection = ({
  textFirst,
  colorTextFirst,
  textSecond,
  fontSize,
  lineBreak,
  textAlign,
}) => {
  return (
    <Title
      fontSize={fontSize}
      colorTextFirst={colorTextFirst}
      textAlign='center'
    >
      {textFirst} {lineBreak === true && <br />} <span>{textSecond}</span>
    </Title>
  )
}

export default TitleSection
