import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  searchBarBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  listingCard: {
    maxWidth: '360px',
    textAlign: 'center',
    boxShadow: '0px 5px 18px hsl(0deg 0% 50% / 18%);',
  },
  listingUserName: {
    fontSize: '1.5rem',
    paddingTop: '10px',
    fontWeight: 'bold',
  },
  listingTags: {
    color: 'rgb(172 172 172)',
  },
  cardContent: {
    padding: '8% 6% 2% 6%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: ' center',
  },
  avatarStyle: {
    height: '120px',
    width: '120px',
  },
  cardFooter: {
    display: 'flex',
    padding: '6%',
    justifyContent: 'space-between',
  },
  starGold: {
    color: 'rgb(255 196 18);',
  },
  starGray: {
    color: 'rgb(220 220 220);',
  },
  iconName: {
    color: 'rgb(244 67 54)',
    fontWeight: 'bold',
  },
  LocationIconRed: {
    color: 'rgb(244 67 54);',
  },
  Location: {
    color: 'gray',
  },
  footerLocation: {
    display: 'flex',
  },
  footerHourlyRate: {
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 10,
    '&:focus': {
      outline: 'none;',
    },
    border: 'none!important',
    outline: 'none',
    fontSize: '1.3rem',
  },
  searchInput: {
    display: 'flex',
    padding: '10px 18px 10px 10px',
    border: '1px solid hsl(0deg 0% 85%);',
    alignItems: 'center',
  },
}));

export default useStyles;
