import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  profileTitle: {
    padding: '7% 0 5% 0px',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
  },
  checkBoxAndLabel: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  availabilityGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: ' 0px 4%',
    // alignItems: 'center',
  },
  textFieldRow: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  spanSpace: {
    padding: '0px 5%',
  },
  availabilityHours: {
    display: 'flex',
    paddingLeft: '6%',
    paddingBottom: '5%',
    // alignItems: 'center',
  },
  AvailableLabel: {
    paddingLeft: '5%',
  },
  btnRow: {
    textAlign: 'center',
    padding: '5% 0px 10% 0px',
  },
  button: {
    background: '#DF2E2E',
    padding: '14px 56px',
    color: 'white',
    '&:hover': {
      background: '#bf2626',
    },
  },

  textInputStyle: {
    width: '75%',
  },
  gridStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    textAlign: 'right',
  },
}));

export default useStyles;
