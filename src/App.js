import { HelmetProvider } from 'react-helmet-async'
import { store } from './redux/store'
import { Provider } from 'react-redux'
// Routes
import RoutesNav from './routes/routes'
// Global Styles
import './theme/css/reset.css'

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
