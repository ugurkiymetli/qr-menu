/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Main from '../containers/Main/Main';
import RestaurantDetail from '../containers/RestaurantDetail/RestaurantDetail';

const routes = [
  { path: '/', element: <Main /> },
  { path: 'restaurants/:id', element: <RestaurantDetail /> },
];
export default routes;
