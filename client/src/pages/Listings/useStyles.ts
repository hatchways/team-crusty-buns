import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchRow: {
    paddingTop: '1.5% ',
  },
  searchTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnRow: {
    textAlign: 'center',
  },
  button: { padding: '14px 56px' },
}));

export default useStyles;
