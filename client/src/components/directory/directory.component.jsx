import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryMenuContainer>
      {sections.map((
        { id, ...othersectionProps } // можно дестракчарить прямо так
      ) => (
        <MenuItem key={id} {...othersectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
