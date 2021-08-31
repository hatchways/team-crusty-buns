import React from 'react';
import { TextField, Grid, Button, Checkbox, Switch } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { UserProfile } from '../../interface/Profile';
import { Formik, FormikHelpers } from 'formik';
import moment from 'moment';
import useStyles from './useStyles';

interface Props {
  currentUserProfile: UserProfile;
  handleProfileSubmit: (
    { availability, isAvailable }: UserProfile,
    { setSubmitting }: FormikHelpers<UserProfile>,
  ) => void;
}

const EditAvailability = ({ handleProfileSubmit, currentUserProfile }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.profileTitle}>Edit Availability</h1>
      <Formik
        initialValues={{
          isAvailable: currentUserProfile.isAvailable || false,
          availability: currentUserProfile?.availability,
        }}
        onSubmit={handleProfileSubmit}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} className={classes.form}>
              <Grid item xs={12}>
                <div className={classes.textFieldRow}>
                  <h3 className={classes.AvailableLabel}>I&apos;m Available: </h3>
                  <Switch size="medium" name="isAvailable" checked={values.isAvailable} onChange={handleChange} />
                </div>
              </Grid>

              <Grid item xs={12}>
                <h3 className={classes.AvailableLabel}>Available Hours: </h3>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.availabilityHours}>
                  <div className={classes.textFieldRow}>
                    <TextField
                      id="start-hours-field"
                      variant="outlined"
                      type="time"
                      value={values.availability?.hours?.start}
                      name="availability[hours][start]"
                      onChange={handleChange}
                    />

                    <span className={classes.spanSpace}>-</span>

                    <TextField
                      id="end-hours-field"
                      variant="outlined"
                      value={values.availability?.hours?.end}
                      type="time"
                      name="availability[hours][end]"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Grid>

              <Grid item xs={12}>
                <h3 className={classes.AvailableLabel}>Available Days:</h3>
              </Grid>
              <Grid item xs={12} className={classes.availabilityGrid}>
                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Monday"
                    checked={values.availability?.days?.Monday}
                    onChange={(c, v) => setFieldValue('availability[days][Monday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Mondays </h4>
                </div>
                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Tuesday"
                    checked={values.availability?.days?.Tuesday}
                    onChange={(c, v) => setFieldValue('availability[days][Tuesday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Tuesdays </h4>
                </div>
                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Wednsday"
                    checked={values.availability?.days?.Wednesday}
                    onChange={(c, v) => setFieldValue('availability[days][Wednesday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Wednesdays </h4>
                </div>

                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Thursday"
                    checked={values.availability?.days?.Thursday}
                    onChange={(c, v) => setFieldValue('availability[days][Thursday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Thursdays </h4>
                </div>

                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Friday"
                    checked={values.availability?.days?.Friday}
                    onChange={(c, v) => setFieldValue('availability[days][Friday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Fridays </h4>
                </div>

                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Saturday"
                    checked={values.availability?.days?.Saturday}
                    onChange={(c, v) => setFieldValue('availability[days][Saturday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Saturdays </h4>
                </div>

                <div className={classes.checkBoxAndLabel}>
                  <Checkbox
                    name="Sunday"
                    checked={values.availability?.days?.Sunday}
                    onChange={(c, v) => setFieldValue('availability[days][Sunday]', v)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  <h4 className={classes.labelStyle}>Sundays </h4>
                </div>
              </Grid>
            </Grid>
            <div className={classes.btnRow}>
              <Button type="submit" variant="contained" className={classes.button}>
                SAVE
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditAvailability;
