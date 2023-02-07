import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/Loading/Loading';
import RestaurantCard from '../../components/Restaurant/RestaurantCard';
import './RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams();
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['restaurantDetail', id],
    queryFn: () =>
      axios
        .get(
          `https://f1902702-b102-4a4e-9672-1cc03fd64dbb.mock.pstmn.io/restaurants/${id}`
        )
        .then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (isLoading) return <Loading />;
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="detail">
      Restaurant Detail - {id}
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
                  src={data?.website}
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
