import ButtonPrimary from './styles'

const Button = ({
  text,
  fontSize,
  color,
  bgColor,
  width,
  customStyle,
  borderColor,
  icon,
  iconSize,
}) => {
  return (
    <ButtonPrimary
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      width={width}
      icon={icon}
      iconSize={iconSize}
      style={customStyle}
    >
      {icon && <img src={icon.type} />}
      {text}
    </ButtonPrimary>
  )
}

export default Button
