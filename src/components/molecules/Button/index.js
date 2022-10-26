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
  margin,
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
      margin={margin}
      style={customStyle}
    >
      {iconLeft && <img src={iconLeft} />}
      {text}
    </ButtonPrimary>
  )
}

export default Button
