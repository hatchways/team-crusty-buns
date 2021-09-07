import React from 'react';
import { Card, Avatar, Box, Divider, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
interface Props {
  userProfile: UserProfile;
}
const Listings = ({ userProfile }: Props): JSX.Element => {
  const classes = useStyles();
  const renderRating = (rate: number) => {
    return Array.from({ length: 5 }, (v, i) => {
      if (i + 1 > rate) {
        return <StarIcon key={i.toString()} className={classes.starGray} />;
      } else {
        return <StarIcon key={i.toString()} className={classes.starGold} />;
      }
    });
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} className={classes.cardGrid}>
      <Card className={classes.listingCard}>
        <Box className={classes.cardContent}>
          <Avatar
            className={classes.avatarStyle}
            sizes={'100%'}
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          />
          <Box className={classes.listingUserName}>{userProfile.firstName}</Box>
          <Box className={classes.listingTags}>{userProfile.tag}</Box>
          <Box p={1}>{renderRating(4)}</Box>
          <Box pt={1} pb={3}>
            {userProfile.description}
          </Box>
        </Box>
        <Divider />
        <Box className={classes.cardFooter}>
          <Box className={classes.footerLocation}>
            <LocationOnIcon className={classes.LocationIconRed} />
            <Box component="span" className={classes.Location}>
              {userProfile.address.city},{userProfile.address.province}
            </Box>
          </Box>

          <Box component="span" className={classes.footerHourlyRate}>
            ${userProfile.hourlyRate}/hr
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default Listings;
