import ButtonPrimary from './styles'

const Button = ({
  text,
  fontSize,
  color,
  bgColor,
  width,
  customStyle,
  borderColor,
  iconLeft,
  iconLeftSize,
}) => {
  return (
    <ButtonPrimary
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      width={width}
      iconLeft={iconLeft}
      iconLeftSize={iconLeftSize}
      style={customStyle}
    >
      {iconLeft && <img src={iconLeft.type} />}
      {text}
    </ButtonPrimary>
  )
}

export default Button
