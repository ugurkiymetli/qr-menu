import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage({ error }: { error: unknown }) {
  return (
    <div
      style={{
        padding: '20px',
        margin: '40px',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4">Error!</Typography>
      <p>{(error as Error).message}</p>
      <Button
        variant="contained"
        style={{ backgroundColor: '#ecf0f1', color: '#34495e' }}
      >
        <Link to="/">Go to Home </Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
