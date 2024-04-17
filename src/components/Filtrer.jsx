import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Contacts"
      value={filter}
      onChange={onChange}
    />
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
