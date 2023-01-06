// Molecules
import InputForm from '../../molecules/InputForm'
import Button from '../../molecules/Button'
// Utils
import { COLORS } from '../../../theme/css/global.colors'
// Styles
import Form from './styles'

const AddressForm = () => {
  return (
    <Form>
      <h5 className='title'>Dirección de envío</h5>
      <InputForm
        type='text'
        name='nameAddress'
        id='nameAddress'
        placeholder='Título de la dirección'
      />
      <div className='row'>
        <InputForm
          type='text'
          name='nameAddress'
          id='nameAddress'
          placeholder='Nombre'
          marginRight={3}
        />
        <InputForm
          type='text'
          name='nameAddress'
          id='nameAddress'
          placeholder='Apellidos'
          marginLeft={3}
        />
      </div>
      <InputForm
        type='text'
        name='nameAddress'
        id='nameAddress'
        placeholder='Dirección'
      />
      <InputForm
        type='text'
        name='nameAddress'
        id='nameAddress'
        placeholder='Comuna'
      />
      <div className='row'>
        <InputForm
          type='text'
          name='nameAddress'
          id='nameAddress'
          placeholder='Código Postal'
          marginRight={3}
        />
        <InputForm
          type='text'
          name='nameAddress'
          id='nameAddress'
          placeholder='Teléfono'
          marginLeft={3}
        />
      </div>
      <Button
        text='Continuar'
        fontSize={17}
        color={COLORS.white}
        bgColor={COLORS.salmon}
        borderColor={COLORS.salmon}
        borderRadius={6}
        customStyle={{ marginTop: 10 }}
      />
    </Form>
  )
}

export default AddressForm
