const Icon = ({ name = 'icon-fish', width = 20, height = 20 }) => {
  const image = require(`../../../assets/images/svg/icons/${name}.svg`)
  return <img src={image} width={width} height={height} />
}

export default Icon
