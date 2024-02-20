/* eslint-disable @typescript-eslint/no-misused-promises */
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthProvider';
import { auth } from '../../utils/api';
import { LoginRequest } from '../../utils/types/auth';

function Login() {
  const { login } = useAuth();
  const loginMutation = useMutation(auth.login);
  const { register, handleSubmit } = useForm<LoginRequest>();
  const onSubmit = async (data: LoginRequest) => {
    const response = await loginMutation.mutateAsync(data);
    login(response.authToken.token);
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
            id="username"
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            {...register('username')}
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
