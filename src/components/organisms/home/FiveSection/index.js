import TitleSection from '../../../molecules/TitleSection'
import ButtonCircleDown from '../../../molecules/ButtonCircleDown'
// SVG
import CoverPeople from '../../../../assets/images/svg/img/people-cover.svg'
import CoverPeopleMobile from '../../../../assets/images/png/cover-people-mobile.png'
import ComeHouse from '../../../../assets/images/svg/img/come.svg'
import bgLeft from '../../../../assets/images/svg/img/bg-five-left.svg'
import bgRight from '../../../../assets/images/svg/img/bg-five-right.svg'
// Styles
import Wrapper from './styles'

const FiveSection = () => {
  return (
    <Wrapper id='somos'>
      <div className='blockLeft'>
        <img src={CoverPeople} className='visible-desktop' />
        <img src={CoverPeopleMobile} className='visible-mobile' />
      </div>
      <div className='blockRight'>
        <TitleSection textFirst='Somos' textSecond='lo que comemos' />
        <p>
          <strong>¡Pasión y amor!</strong> esa es la base de nuestra cocina.
          Puede sonar a tópico, pero es exactamente nuestra razón de ser y de
          sentir. Así nos lo ha enseñado línea a línea, párrafo a párrafo,
          nuestro cuaderno familiar de recetas, heredado de generación en
          generación y cuyo legado aún se mantiene vigente y que las hermanas
          Biancani se han encargado de perpetuar.
        </p>
        <p>
          Esta <strong>“Biblia culinaria”</strong>, escrita por nuestras madres
          y abuelas, se encarga de mantener la tradición familiar, enseñándonos
          que en los detalles está la diferencia.
        </p>
        <p>
          Nuestra vasta experiencia entregando un servicio de excelencia en
          distintos comedores escolares en Chile y tras recibir el
          reconocimiento de diversas instituciones, nos lleva a expandirnos y
          compartir nuestro conocimiento culinario ancestral hasta la mesa de tu
          hogar, tu oficina o allá donde te encuentres. Come como en casa.
        </p>
        <img src={ComeHouse} className='blockRight__image' />

        <ButtonCircleDown
          customStyle={{ marginTop: 60 }}
          sectionId='feedback'
        />
      </div>
      <img src={bgLeft} className='bgLeft' />
      <img src={bgRight} className='bgRight' />
    </Wrapper>
  )
}

export default FiveSection
