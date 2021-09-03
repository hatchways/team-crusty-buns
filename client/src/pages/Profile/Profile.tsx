import React, { useState } from 'react';
import EditProfile from '../../components/Profile/EditProfile';
import EditAvailability from '../../components/Profile/EditAvailability';
import { Tabs, Grid, Tab, Box, Paper, Container, CircularProgress, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import { useProfile } from '../../context/useProfileContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { UserProfile } from '../../interface/Profile';
import updateUserProfile from '../../helpers/APICalls/updateUserProfile';
import useStyles from './useStyles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Profile = (): JSX.Element => {
  const classes = useStyles();
  const { currentUserProfile, updateProfileContext } = useProfile();
  const { updateSnackBarMessage } = useSnackBar();
  const [value, setValue] = useState(0);

  const handleProfileSubmit = (
    {
      isAvailable,
      firstName,
      lastName,
      gender,
      birthDate,
      hourlyRate,
      address,
      email,
      description,
      availability,
    }: UserProfile,
    { setSubmitting }: FormikHelpers<UserProfile>,
  ) => {
    updateUserProfile({
      isAvailable,
      firstName,
      lastName,
      gender,
      birthDate,
      hourlyRate,
      address,
      email,
      availability,
      description,
    }).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateProfileContext(data.success);
        updateSnackBarMessage('profile updated!');
      } else {
        console.error({ data });
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };
  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };
  if (currentUserProfile === undefined) return <CircularProgress />;
  if (!currentUserProfile) {
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className={classes.pageContainer}>
          <Grid item xs={2}>
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              className={classes.tabs}
              classes={{ indicator: classes.indicator }}
            >
              <Tab label="Edit Profile" {...a11yProps(0)} />

              <Tab label="Availability" {...a11yProps(1)} />
            </Tabs>
          </Grid>
          <Grid item xs={8}>
            <TabPanel value={value} index={0}>
              <Paper elevation={3}>
                <EditProfile handleProfileSubmit={handleProfileSubmit} currentUserProfile={currentUserProfile} />
              </Paper>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Paper elevation={3}>
                <EditAvailability handleProfileSubmit={handleProfileSubmit} currentUserProfile={currentUserProfile} />
              </Paper>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
