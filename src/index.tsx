import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from './theme/ThemeProvider';
import App from './App';


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);