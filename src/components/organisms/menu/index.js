import { Link } from 'react-router-dom'
import { URL_NAV } from '../../../utils/const/menuNav'

const Navbar = () => {
  return (
    <div>
      {URL_NAV.map((menu, index) => (
        <Link key={index} to={`/${menu.url}`}>
          {menu.name}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
