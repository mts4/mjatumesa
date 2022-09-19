import ButtonPrimary from './styles'

const Button = ({
  text,
  fontSize,
  color,
  bgColor,
  width,
  customStyle,
  borderColor,
}) => {
  return (
    <ButtonPrimary
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      width={width}
      style={customStyle}
    >
      {text}
    </ButtonPrimary>
  )
}

export default Button
