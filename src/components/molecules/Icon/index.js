const Icon = ({
  name = 'icon-fish',
  width = 20,
  height = 20,
  customStyle,
  onClickIcon,
}) => {
  const image = require(`../../../assets/images/svg/icons/${name}.svg`)
  return (
    <img
      src={image}
      width={width}
      height={height}
      style={customStyle && customStyle}
      onClick={onClickIcon && onClickIcon()}
    />
  )
}

export default Icon
