/* eslint-disable react/function-component-definition */
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
import { Phone, Place } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Restaurant } from '../../utils/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
}): JSX.Element => {
  const { menu, name, id, phone, address, addressLink, website } = restaurant;
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
        sx={{
          height: 148,
          width: 148,
          margin: 'auto',
          backgroundSize: 'contain',
        }}
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
          <a href={addressLink} target="_blank" rel="noopener noreferrer">
            {address}
          </a>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <a href={`tel:+${phone}`}>{phone}</a>
        </Typography>
      </CardContent>
      <CardActions>
        {phone ? (
          <Tooltip title="Call!">
            <IconButton>
              <Typography>
                <a href={`tel:+${phone}`}>
                  <Phone />
                </a>
              </Typography>{' '}
            </IconButton>
          </Tooltip>
        ) : null}
        {addressLink ? (
          <Tooltip title="Get directions!">
            <IconButton>
              <Typography variant="body2">
                <a href={addressLink} target="_blank" rel="noopener noreferrer">
                  <Place />
                </a>
              </Typography>
            </IconButton>
          </Tooltip>
        ) : null}
        {website ? (
          <Tooltip title="Website!">
            <IconButton>
              <Typography variant="body2">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <RestaurantMenuIcon />
                </a>
              </Typography>
            </IconButton>
          </Tooltip>
        ) : null}
      </CardActions>
    </Paper>
  );
};

export default RestaurantCard;
