import { HelmetProvider } from 'react-helmet-async'
import { store } from './redux/store'
import { Provider } from 'react-redux'
// Routes
import RoutesNav from './routes/routes'
// Global Styles
import 'cheffify-react-icons/dist/index.css'
import './theme/css/lib/reset.css'
import 'rc-slider/assets/index.css'
import GlobalsStyles from './theme/css/global.styles'

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <GlobalsStyles />
        <RoutesNav />
      </HelmetProvider>
    </Provider>
  )
}

export default App
