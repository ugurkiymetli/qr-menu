import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import './Restaurants.css';

function Restaurants() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['restaurants'],
    queryFn: () =>
      axios
        .get(
          'https://f1902702-b102-4a4e-9672-1cc03fd64dbb.mock.pstmn.io/restaurants'
        )
        .then((res) => res.data),
    enabled: false,
  });
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="restaurants">
      <div>Restaurants</div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <RestaurantCard restaurant={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Restaurants;
