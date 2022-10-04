import React from 'react';
import { Stack } from '@mui/material';
import { categories } from 'common/utils/constants';

const selectedCategory = 'New';

const SideBar: React.FC = () => (
  <Stack className="sidebar">
    {categories.map((category) => (
      <button className={`sidebar__btn ${category.name === selectedCategory && 'sidebar__btn--selected'}`} key={category.name}>
        <span className={`sidebar__icon ${category.name === selectedCategory && 'sidebar__icon--selected'}`}>
          {category.icon}
        </span>

        <span className={`sidebar__name ${category.name === selectedCategory && 'sidebar__name--selected'}`}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
