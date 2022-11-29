const Icon = ({ name = 'icon-fish', width = 20, height = 20, customStyle }) => {
  const image = require(`../../../assets/images/svg/icons/${name}.svg`)
  return (
    <img
      src={image}
      width={width}
      height={height}
      style={customStyle && customStyle}
    />
  )
}

export default Icon
