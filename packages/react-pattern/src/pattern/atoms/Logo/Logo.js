import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

export const Logo = ({ primary, logoTitle }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <a>
      <span
        className={['logo', mode].join(' ')}>
        {logoTitle}
      </span>
    </a>
  );
};

Logo.propTypes = {
  primary: PropTypes.bool,
  logoTitle: PropTypes.string,
};

Logo.defaultProps = {
  logoTitle: 'cda_',
  primary: true,
};
