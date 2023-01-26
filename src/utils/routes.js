/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Login from '../containers/Auth/Login';
import Main from '../containers/Main/Main';
import Menus from '../containers/Menus/Menus';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import RestaurantDetail from '../containers/RestaurantDetail/RestaurantDetail';
import Restaurants from '../containers/Restaurants/Restaurants';

const routes = [
  { path: '/', element: <Main /> },
  { path: 'restaurants', element: <Restaurants /> },
  { path: 'menus', element: <Menus /> },
  { path: 'restaurants/:id', element: <RestaurantDetail /> },
  { path: 'login', element: <Login /> },
  { path: '*', element: <NotFoundPage /> },
];
export default routes;
