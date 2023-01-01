/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Main from './containers/Main/Main';
import RestaurantDetail from './containers/RestaurantDetail/RestaurantDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="restaurants/:id" element={<RestaurantDetail />} />
      </Routes>
    </>
  );
}

export default App;
