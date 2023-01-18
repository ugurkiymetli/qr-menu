import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Phone, Place } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  const { menu, name, id, phone, address } = restaurant;

  return (
    <Paper
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: 2,
        p: 2,
      }}
    >
      <CardMedia
        sx={{ height: 148, width: 148, margin: 'auto' }}
        image={menu}
      />
      <CardContent>
        <Link to={`/restaurants/${id}`}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              color: 'text.primary',
            }}
          >
            {name}
          </Typography>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <a href="http://maps.google.com">{address}</a>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <a href={`tel:+${phone}`}>{phone}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Call!">
          <IconButton>
            <Typography>
              <a href={`tel:+${phone}`}>
                <Phone />
              </a>
            </Typography>{' '}
          </IconButton>
        </Tooltip>
        <Tooltip title="Get directions!">
          <IconButton>
            <Typography variant="body2">
              <a href="http://maps.google.com">
                <Place />
              </a>
            </Typography>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Paper>
  );
}
RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    menu: PropTypes.string,
    phone: PropTypes.string,
    name: PropTypes.string,
  }),
};
RestaurantCard.defaultProps = {
  restaurant: {
    id: -1,
    address: 'address',
    menu: 'menu',
    phone: 'phone',
    name: 'name',
  },
};
export default RestaurantCard;
