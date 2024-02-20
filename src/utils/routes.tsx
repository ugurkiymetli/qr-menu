import Login from '../containers/Auth/Login';
import Main from '../containers/Main/Main';
import Menus from '../containers/Menus/Menus';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import RestaurantAdd from '../containers/RestaurantAdd/RestaurantAdd';
import RestaurantDetail from '../containers/RestaurantDetail/RestaurantDetail';
import Restaurants from '../containers/Restaurants/Restaurants';

const routes = [
  { path: '/', element: <Main /> },
  { path: 'restaurants', element: <Restaurants /> },
  { path: 'menus', element: <Menus /> },
  { path: 'restaurants/:id', element: <RestaurantDetail /> },
  { path: 'login', element: <Login /> },
  { path: 'restaurants/add', element: <RestaurantAdd /> },
  { path: '*', element: <NotFoundPage /> },
];
export default routes;
