import ButtonPrimary from './styles'

const Button = ({ text, fontSize, color, bgColor, width, customStyle }) => {
  return (
    <ButtonPrimary
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      width={width}
      style={customStyle}
    >
      {text}
    </ButtonPrimary>
  )
}

export default Button
