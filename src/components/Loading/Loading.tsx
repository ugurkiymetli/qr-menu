import React from 'react';
import './Loading.css';

export default function Loading(): React.JSX.Element {
  return (
    <div className="spinner-container">
      <div className="loading-spinner" />
    </div>
  );
}
