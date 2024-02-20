/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthProvider';
import { restaurant } from '../../utils/api';
import { RestaurantForm } from '../../utils/types/restaurant';

function RestaurantAdd() {
  const { enqueueSnackbar } = useSnackbar();

  const { isAuthenticated, authToken } = useAuth();
  const addRestaurantMutation = useMutation(
    (restaurantData: RestaurantForm) =>
      restaurant.addRestaurant(restaurantData, authToken),
    {
      onSuccess: () => {
        enqueueSnackbar('Restaurant added!', { variant: 'success' });
      },
      onError: () => {
        enqueueSnackbar('Restaurant add error!', { variant: 'error' });
      },
    }
  );
  const { register, handleSubmit, reset, formState } =
    useForm<RestaurantForm>();

  const onSubmit = async (data: RestaurantForm) => {
    if (isAuthenticated()) await addRestaurantMutation.mutateAsync(data);
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ p: 16 }}>
          <Grid item xs={12}>
            <Typography variant="h4" color="text.primary">
              Add Restaurant
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              margin="normal"
              required
              fullWidth
              {...register('name')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Menu Link"
              margin="normal"
              required
              fullWidth
              {...register('menuLink')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Google Maps Link"
              margin="normal"
              required
              fullWidth
              {...register('addressLink')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image Link"
              margin="normal"
              fullWidth
              {...register('imageLink')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Restaurant
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default RestaurantAdd;
