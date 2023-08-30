/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const styles = {
    root: { marginTop: 'auto' },
    submit: { marginTop: 1 },
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      spacing={1}
      sx={styles.root}
    >
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" color="primary">
          Login
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            {...register('email')}
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
            {...register('password')}
          />
        </Grid>
        <Grid item xs={12} sx={styles.submit}>
          <Button
            type="submit"
            size="small"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default Login;
