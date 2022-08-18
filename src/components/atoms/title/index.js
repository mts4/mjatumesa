import Text from './styles'

const Title = ({ title, fontSize = 20, color }) => {
  return (
    <Text fontSize={fontSize} color={color}>
      {title}
    </Text>
  )
}

export default Title
