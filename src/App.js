import { HelmetProvider } from 'react-helmet-async'
import { store } from './redux/store'
import { Provider } from 'react-redux'
// Routes
import RoutesNav from './routes/routes'
// Global Styles
import 'cheffify-react-icons/dist/index.css'
import './theme/css/lib/reset.css'

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <RoutesNav />
      </HelmetProvider>
    </Provider>
  )
}

export default App
