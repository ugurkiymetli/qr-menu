import AddIcon from '@mui/icons-material/Add';
import { IconButton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import { useAuth } from '../../context/AuthProvider';
import { restaurant } from '../../utils/api';
import { Restaurant } from '../../utils/types/restaurant';
import ErrorPage from '../ErrorPage/ErrorPage';
import './Restaurants.css';

function Restaurants() {
  const { isAuthenticated } = useAuth();

  const {
    isLoading,
    error,
    data: restaurants,
    refetch,
  } = useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    queryFn: () => restaurant.getAllRestaurants(),
    enabled: false,
    retry: false,
  });
  useEffect(() => {
    void refetch();
  }, []);

  if (isLoading) return <LoadingSkeleton />;

  if (error) return <ErrorPage error={error} />;

  return (
    <div className="restaurants">
      <div>
        Restaurants{' '}
        {isAuthenticated() ? (
          <IconButton aria-label="add">
            <Link to={`/restaurants/add`}>
              <AddIcon />
            </Link>
          </IconButton>
        ) : null}
      </div>
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
