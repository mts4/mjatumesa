// SVGS
import IconTomato from '../assets/images/svg/icons/tomato-shadow.svg'
import IconHearth from '../assets/images/svg/icons/hearth-shadow.svg'
import IconTruck from '../assets/images/svg/icons/truck-shadow.svg'
import IconFood from '../assets/images/svg/icons/food-shadow.svg'

export const URL_NAV = [
  {
    name: 'Servicios',
    url: '',
    icon: {
      name: 'star',
      size: 11,
    },
  },
  {
    name: 'Somos lo que comemos',
    url: '',
    icon: {
      name: 'hearth',
      size: 10,
    },
  },
]

export const LIST_INFO = [
  {
    title: '100% Ingredinetes Naturales',
    icon: <IconTomato />,
  },
  {
    title: 'Sin aditivos ni conservantes',
    icon: <IconHearth />,
  },
  {
    title: 'Envíos a domicilio',
    icon: <IconTruck />,
  },
  {
    title: 'Hecho como en casa',
    icon: <IconFood />,
  },
]

export const PRICE_DELIVERY = 3000
