import React from 'react';
import PropTypes from 'prop-types';
import './artefactCard.css';
import { Image } from '../../atoms/Image'

export const ArtefactCard = ({title, subtitle, date, imgSrc, imgAlt, classification}) => {
  return (
    <div className="artefact-card">
      <Image
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
      <div className="artefact-card-content-section">
        <div className="artefact-card-content-inner-section">
          <h2>{title}</h2>
          <p>{classification}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

ArtefactCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
};

ArtefactCard.defaultProps = {
  title: 'Doppelbildnis Friedrich der Weise',
  subtitle: 'Lucas Cranach der Ältere',
  date: '1877',
  classification: 'Druckgrafik',
};
