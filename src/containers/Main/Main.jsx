import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import './Main.css';

function Main() {
  const secret = process.env.REACT_APP_SECRET;

  console.log(secret);

  const mainStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'text.primary',
    fontSize: 'calc(10px + 2vmin)',
  };
  return (
    <Grid sx={mainStyle}>
      <p>
        <Tooltip title={secret}>
          <span>Welcome to</span>
        </Tooltip>
        <code className="main-link"> QR Menu </code>
        App!.
      </p>
    </Grid>
  );
}

export default Main;
