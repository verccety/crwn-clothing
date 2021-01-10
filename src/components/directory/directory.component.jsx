import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((
        { id, ...othersectionProps }, // можно дестракчарить прямо так
      ) => (
        <MenuItem key={id} {...othersectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
