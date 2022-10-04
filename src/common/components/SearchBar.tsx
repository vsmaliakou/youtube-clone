import React from 'react';
import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar: React.FC = () => {
  return (
    <Paper className="search-bar" component="form" onSubmit={() => {}} sx={{ mr: { sm: 5 } }}>
      <input className="search-bar__input" placeholder="Search..." value="" onChange={() => {}} />

      <IconButton className="search-bar__icon" type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
