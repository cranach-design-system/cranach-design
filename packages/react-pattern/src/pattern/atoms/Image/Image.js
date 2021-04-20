import React from 'react';
import PropTypes from 'prop-types';
import './image.css';

export const Image = ({ imgSrc, imgAlt }) => {
  return (
    <div className="artefact-card-image-section">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired
};

Image.defaultProps = {
  imgSrc: 'https://lucascranach.org/application/files/1715/2120/9916/Portraet001.jpg',
  imgAlt: 'Cranach Image'
};
