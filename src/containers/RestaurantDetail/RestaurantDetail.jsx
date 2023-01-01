import React from 'react';
import { useParams } from 'react-router';
import './RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams();

  return (
    <div className="detail">
      Restaurant Details
      <p>
        <strong>{id}</strong>
      </p>
    </div>
  );
}

export default RestaurantDetail;
