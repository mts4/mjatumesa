import ArrowScrollDown from '../../../molecules/ArrowScrollDown'
// Styles
import Wrapper from './styles'

const SecondSection = () => {
  return (
    <Wrapper>
      <ArrowScrollDown />
      <h2 className='title'>
        ¿Qué <span>comemos hoy?</span>
      </h2>
      <p className='description'>
        Sabemos que cuesta decir quién es mejor, si el papá o la mamá. A
        nosotros también, por eso dejamos una sugerencia, tú eliges.
      </p>
    </Wrapper>
  )
}

export default SecondSection
