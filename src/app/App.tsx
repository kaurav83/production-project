import { classNames } from 'shared/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from './providers/router';

import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';


const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <Navbar />

      <div className="content-page">
        <Sidebar />

        <AppRouter />
      </div>
    </div>
  )
};

export default App; 