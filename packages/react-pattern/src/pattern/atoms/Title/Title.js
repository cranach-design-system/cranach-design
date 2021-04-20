import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

export const Title = ({ text }) => {
  return (
    <h1 className="title">{text}</h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  text: 'type your title'
};
