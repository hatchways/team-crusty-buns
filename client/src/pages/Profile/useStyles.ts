import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
  },

  pageContainer: {
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  tabs: {
    marginTop: 50,
  },
}));

export default useStyles;
