import React from 'react';
import { Stack } from '@mui/material';
import { categories } from 'common/utils/constants';

interface IComponentProps {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

const SideBar: React.FC<IComponentProps> = ({ selectedCategory, setSelectedCategory }) => (
  <Stack className="sidebar">
    {categories.map((category) => (
      <button
        key={category.name}
        className={`sidebar__btn ${category.name === selectedCategory && 'sidebar__btn--selected'}`}
        onClick={() => setSelectedCategory(category.name)}
      >
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
