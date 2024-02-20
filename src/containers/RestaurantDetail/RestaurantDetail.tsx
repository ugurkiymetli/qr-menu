import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import restaurant from '../../utils/api';
import { Restaurant } from '../../utils/types/restaurant';
import ErrorPage from '../ErrorPage/ErrorPage';
import './RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();

  if (id === undefined) return <ErrorPage error={'not found!'} />;

  const { data, error, isLoading, refetch } = useQuery<Restaurant>({
    queryKey: ['restaurantDetail', id],
    queryFn: () => restaurant.getRestaurantById(id),
  });

  useEffect(() => {
    void refetch();
  }, [id]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="detail">
      Restaurant Detail
      <p>{data ? <RestaurantCard restaurant={data} /> : null}</p>
      {data?.website ? (
        <Grid
          sx={{
            marginTop: 2,
            marginBottom: 2,
            width: '100%',
          }}
        >
          <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="website"
              id="website-accordion"
            >
              <Typography>Website</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <iframe
                  className="iframe"
                  title="Restaurant Web Site"
                  src={data.website}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ) : null}
    </div>
  );
}

export default RestaurantDetail;
