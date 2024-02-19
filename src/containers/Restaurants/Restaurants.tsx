import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import restaurant from '../../utils/api';
import {
  Restaurant,
  RestaurantDatabaseModel,
} from '../../utils/types/restaurant';
import ErrorPage from '../ErrorPage/ErrorPage';
import './Restaurants.css';

function Restaurants() {
  const API_ENDPOINT =
    'https://f1902702-b102-4a4e-9672-1cc03fd64dbb.mock.pstmn.io/restaurants';
  const {
    isLoading,
    error,
    data: restaurants,
    refetch,
  } = useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    queryFn: () => axios.get(API_ENDPOINT).then((res) => res.data),
    enabled: false,
    retry: false,
  });
  useEffect(() => {
    void refetch();
  }, []);

  const testQuery = useQuery<RestaurantDatabaseModel[]>({
    queryKey: ['test-restaurants'],
    queryFn: () => restaurant.getAllRestaurants(),
    retry: false,
  });

  console.log(testQuery.data);

  if (isLoading) return <LoadingSkeleton />;

  if (error) return <ErrorPage error={error} />;

  return (
    <div className="restaurants">
      <div>Restaurants</div>
      {restaurants ? (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </li>
          ))}
        </ul>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>No Restaurants</Typography>
      )}
    </div>
  );
}

export default Restaurants;
