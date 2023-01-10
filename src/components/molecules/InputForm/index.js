// Styles
import Input from './styles'

const InputForm = ({
  placeholder,
  type,
  marginRight,
  marginLeft,
  iconLeft,
  placeHolderAlign,
  fontWeight,
  fontStyle,
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      marginRight={marginRight}
      marginLeft={marginLeft}
      iconLeft={iconLeft}
      placeHolderAlign={placeHolderAlign}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
    />
  )
}

export default InputForm
