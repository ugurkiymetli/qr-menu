import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

function Main() {
  const styles = {
    root: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      width: '80%',
      minWidth: '300px',
      maxWidth: '600px',
      backgroundColor: 'palette.primary.main',
      color: 'palette.primary.main',
      padding: 4,
      textAlign: 'center',
    },
    title: {
      fontWeight: 600,
      paddingBottom: 1,
      '&:after': {
        content: '""',
        display: 'block',
        width: '50%',
        margin: '0.5em auto 0',
        borderBottom: '3px solid',
        borderColor: 'secondary.main',
      },
    },
    qrMenu: {
      fontWeight: 'bolder',
      color: 'secondary.main',
    },
    firstParagraph: {
      paddingBottom: 1,
    },
    secondParagraph: {
      borderTop: '1px solid',
      borderColor: 'divider',
      paddingTop: 1,
    },
  };
  return (
    <Container sx={styles.root}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.title} variant="h4" gutterBottom>
            Welcome to <Grid sx={styles.qrMenu}>QR Menu</Grid> App!
          </Typography>
          <Box sx={styles.firstParagraph}>
            <Typography variant="subtitle1" gutterBottom>
              The ultimate destination for foodies and restaurant enthusiasts!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Here, youll find a collection of menus from a wide variety of
              restaurants, all in one convenient location. Whether youre looking
              for a new spot to try or simply curious about what your favorite
              restaurants have to offer, our app has you covered.
            </Typography>
          </Box>
          <Box sx={styles.secondParagraph}>
            <Typography variant="subtitle1" gutterBottom>
              With our easy-to-use interface, you can browse menus, search for
              specific dishes or restaurants, and even add your own favorite
              menus to the collection. Plus, with our community features, you
              can share your findings with friends and connect with other food
              lovers.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              So why wait? Join us today and start discovering new and delicious
              restaurants and menu items!
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Main;
