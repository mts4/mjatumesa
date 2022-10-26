// Styles
import Title from './styles'

const TitleSection = ({
  textFirst,
  colorTextFirst,
  textSecond,
  fontSize,
  lineBreak,
  textAlign,
  className,
}) => {
  return (
    <Title
      fontSize={fontSize}
      colorTextFirst={colorTextFirst}
      textAlign={textAlign}
      className={className && className}
    >
      {textFirst} {lineBreak === true && <br />} <span>{textSecond}</span>
    </Title>
  )
}

export default TitleSection
