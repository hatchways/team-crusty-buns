import React from 'react';
import { TextField, Grid, Button, Box } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { UserProfile } from '../../interface/Profile';
import { Formik, FormikHelpers } from 'formik';
import moment from 'moment';
import useStyles from './useStyles';

interface Props {
  currentUserProfile: UserProfile;
  handleProfileSubmit: (
    { firstName, lastName, gender, birthDate, hourlyRate, address, email, description }: UserProfile,
    { setSubmitting }: FormikHelpers<UserProfile>,
  ) => void;
}
const cities = ['Toronto', 'Barrie', 'Markham', 'Richmood Hii'];
const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon Territory',
];

const gender = ['male', 'female', 'unknown'];
const EditProfile = ({ handleProfileSubmit, currentUserProfile }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.profileTitle}>Edit Profile</h1>
      <Formik
        initialValues={{
          firstName: currentUserProfile?.firstName || '',
          lastName: currentUserProfile?.lastName || '',
          gender: currentUserProfile?.gender || '',
          email: currentUserProfile?.email || '',
          birthDate: currentUserProfile?.birthDate || undefined,
          hourlyRate: currentUserProfile?.hourlyRate || undefined,
          address: currentUserProfile?.address || { city: '', province: '' },
          description: currentUserProfile?.description || '',
        }}
        onSubmit={handleProfileSubmit}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} className={classes.form}>
              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>FirstName </h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  className={classes.textInputStyle}
                  label="FirstName"
                  variant="outlined"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>LastName </h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="lastName"
                  className={classes.textInputStyle}
                  onChange={handleChange}
                  label="LastName"
                  variant="outlined"
                  value={values.lastName}
                />
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Gender </h3>
              </Grid>
              <Grid item xs={8}>
                <Autocomplete
                  id="gender"
                  value={values.gender}
                  className={classes.textInputStyle}
                  onChange={(c, v) => setFieldValue('gender', v)}
                  options={gender}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => <TextField {...params} label="Gender" variant="outlined" />}
                />
              </Grid>
              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Birthday</h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="birthDate"
                  type="date"
                  className={classes.textInputStyle}
                  onChange={handleChange}
                  variant="outlined"
                  value={moment(values.birthDate).format('YYYY-MM-DD')}
                />
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Hourly Rate </h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  type="number"
                  onChange={handleChange}
                  className={classes.textInputStyle}
                  label="Hourly Rate"
                  variant="outlined"
                  name="hourlyRate"
                  value={values.hourlyRate}
                />
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Contact Email </h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="email"
                  className={classes.textInputStyle}
                  onChange={handleChange}
                  label="Contact Email"
                  variant="outlined"
                  value={values.email}
                />
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Address </h3>
              </Grid>
              <Grid item xs={8}>
                <div style={{ display: 'flex', width: '75%' }}>
                  <Autocomplete
                    id="city"
                    value={values.address?.city}
                    className={classes.textInputStyle}
                    style={{ marginRight: 5 }}
                    options={cities}
                    onChange={(c, v) => setFieldValue('address[city]', v)}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} label="city" name="city" variant="outlined" />}
                  />
                  <Autocomplete
                    id="province"
                    value={values.address?.province}
                    className={classes.textInputStyle}
                    options={provinces}
                    onChange={(c, v) => setFieldValue('address[province]', v)}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="province" name="province" variant="outlined" />
                    )}
                  />
                </div>
              </Grid>

              <Grid item xs={4}>
                <h3 className={classes.labelStyle}>Describe Yourself </h3>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  multiline
                  rows={6}
                  rowsMax={8}
                  className={classes.textInputStyle}
                  label="Describe Yourself"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box className={classes.btnRow}>
              <Button type="submit" variant="contained" className={classes.button}>
                SAVE
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
