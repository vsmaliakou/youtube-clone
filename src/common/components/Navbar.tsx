import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from 'common/utils/constants';
import { SearchBar } from 'common/components';

const Navbar: React.FC = () => (
  <Stack className="navbar">
    <Link className="navbar__link" to="/">
      <img src={logo} alt="logo" />
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
