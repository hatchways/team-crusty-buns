import React from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
// import { useListings } from '../../context/useListingsContext';
import ListingCard from '../../components/Listings/ListingCard';
import ListingSearchBar from '../../components/Listings/ListingSearchBar';
import useStyles from './useStyles';
interface UserProfile {
  firstName: string;
  lastName: string;
  gender: string;
  tag: string;
  hourlyRate: number;
  address: {
    city: string;
    province: string;
  };
  description: string;
}

const userLists = [
  {
    firstName: 'eric',
    lastName: 'xiong',
    gender: 'male',
    tag: 'Dog care Helper',
    address: {
      city: 'Toronto',
      province: 'Ontario',
    },
    hourlyRate: 18,
    description: 'DOG SITTER, I would love to work with your dog',
  },
  {
    firstName: 'eric2',
    lastName: 'xiong',
    gender: 'male',
    tag: 'Dog care Helper',
    address: {
      city: 'Toronto',
      province: 'Ontario',
    },
    hourlyRate: 18,
    description: 'DOG SITTER,I would love to work with your dog',
  },
  {
    firstName: 'eric3',
    lastName: 'xiong',
    gender: 'male',
    tag: 'Dog care Helper',
    address: {
      city: 'Toronto',
      province: 'Ontario',
    },
    hourlyRate: 18,
    description: 'DOG SITTER, I would love to work with your dog',
  },
];
const Listings = (): JSX.Element => {
  const classes = useStyles();
  const renderListingCards = (Lists: UserProfile[]) => {
    if (Lists === undefined || Lists === null) return;
    return Lists.map((l) => {
      return <ListingCard key={l.firstName} userProfile={l} />;
    });
  };
  return (
    <Box>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} className={classes.searchTitle}>
            <h1>Your Research Result</h1>
          </Grid>
          <Grid item xs={12} className={classes.searchRow}>
            <ListingSearchBar />
          </Grid>
          {renderListingCards(userLists)}
          <Box className={classes.btnRow} mt={9}>
            <Button type="submit" variant="outlined" className={classes.button}>
              SHOW MORE
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Listings;
