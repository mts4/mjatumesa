import Text from './styles'

const Title = ({ title, fontSize = 20 }) => {
  return (
    <Text fontSize={fontSize} color='red'>
      {title}
    </Text>
  )
}

export default Title
