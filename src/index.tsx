import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from 'app/providers/ThemeProvider';

import App from 'app/App';


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);