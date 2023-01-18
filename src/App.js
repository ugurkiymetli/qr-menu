/* eslint-disable react/jsx-filename-extension */
import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import routes from './utils/routes';

function App() {
  return (
    <Grid
      id="main-container"
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Grid>
  );
}

export default App;
