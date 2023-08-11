import { type RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/404';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE_PAGE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: { [key in AppRoutes]: string } = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE_PAGE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: { [key in AppRoutes]: RouteProps } = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
