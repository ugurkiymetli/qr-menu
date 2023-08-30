import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import './Restaurants.css';
import { Restaurant } from '../../utils/types/restaurant';
import ErrorPage from '../ErrorPage/ErrorPage';

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
    queryFn: () => axios.get(API_ENDPOINT).then((res) => res.data),
    enabled: false,
    retry: false,
  });
  useEffect(() => {
    refetch();
  }, []);

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
