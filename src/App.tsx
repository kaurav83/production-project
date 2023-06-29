import { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { classNames } from './helpers/classNames/classNames';
import { useTheme } from './theme/useTheme';

import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Counter } from "./components/Counter";
import './styles/index.scss';

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>
        toggle
      </button>

      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>

      some text

      <Counter />
    </div>
  )
};

export default App;