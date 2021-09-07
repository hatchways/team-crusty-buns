import React from 'react';
import { Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './useStyles';
const ListingSearchBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.searchBarBox}>
      <Box className={classes.searchInput}>
        <SearchIcon className={classes.iconName} />
        <input className={classes.input} />
      </Box>
      <Box className={classes.searchInput}>
        <input className={classes.input} type="date" />
      </Box>
    </Box>
  );
};

export default ListingSearchBar;
