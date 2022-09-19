// Styles
import Title from './styles'

const TitleSection = ({ textFirst, textSecond, fontSize }) => {
  return (
    <Title fontSize={fontSize}>
      {textFirst} <span>{textSecond}</span>
    </Title>
  )
}

export default TitleSection
