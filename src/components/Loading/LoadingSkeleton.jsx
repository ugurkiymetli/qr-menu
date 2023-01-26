import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import React from 'react';

function SkeletonX() {
  return (
    <Paper
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: 2,
        p: 1,
        maxWidth: '80vh',
        margin: 'auto',
      }}
    >
      <CardMedia sx={{ height: 148, width: 148, margin: 'auto' }}>
        <Skeleton height="100%" />
      </CardMedia>
      <CardContent>
        <Typography sx={{ mb: 1.5, height: '6vh' }}>
          <Skeleton height="100%" />
        </Typography>
        <Typography sx={{ mb: 1.5, height: '4vh' }}>
          <Skeleton height="100%" />
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>
              <Skeleton width="50%" ml="auto" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Skeleton width="50%" ml="auto" />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

function LoadingSkeleton() {
  return (
    <ul>
      <li>
        <SkeletonX />
      </li>
      <li>
        <SkeletonX />
      </li>
      <li>
        <SkeletonX />
      </li>
    </ul>
  );
}

export default LoadingSkeleton;
