import React from 'react';
import { TextField, Grid, Button, Checkbox, Switch, Box } from '@material-ui/core';
import { UserProfile } from '../../interface/Profile';
import { Formik, FormikHelpers } from 'formik';
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
  const renderDays = (
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    values: UserProfile,
  ) => {
    if (!values || !values.availability) return;
    return Object.keys(values.availability.days).map((d) => {
      if (!d) return;
      return (
        <div key={d} className={classes.checkBoxAndLabel}>
          <Checkbox
            name={d}
            checked={values.availability?.days[`${d}`]}
            onChange={(c, v) => setFieldValue(`availability[days][${d}]`, v)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <h4 className={classes.labelStyle}>{d}s </h4>
        </div>
      );
    });
  };
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
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
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
                {renderDays(setFieldValue, values)}
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

export default EditAvailability;
