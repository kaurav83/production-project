import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'

import App from 'app/App'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
)
