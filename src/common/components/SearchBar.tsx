import React, { FormEvent, useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper className="search-bar" component="form" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton className="search-bar__icon" type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
