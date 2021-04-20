import React from 'react';
import PropTypes from 'prop-types';
import './artefactIntro.css';
import { Logo } from '../../atoms/Logo'
import { Button } from '../../atoms/Button'
import { ArtefactCard } from '../../molecules/ArtefactCard'

export const ArtefactIntro = (
  {
    logoTitle,
    artefactCardTitle,
    artefactCardSubtitle,
    artefactCardDate,
    artefactCardImgSrc,
    artefactCardImgAlt,
    artefactCardClassification,
    paragraphText,
    buttonBackgroundColor,
    buttonSize,
    buttonLabel
  }
) => {
  return (
    <div className="artefact-intro">
      <div className="artefact-intro-inner-section">
        <Logo logoTitle={logoTitle} />
        <ArtefactCard
          title={artefactCardTitle}
          subtitle={artefactCardSubtitle}
          date={artefactCardDate}
          imgSrc={artefactCardImgSrc}
          imgAlt={artefactCardImgAlt}
          classification={artefactCardClassification}
          />
        <div className="paragraph-section">
          <p className="artefact-intro-paragraph">{paragraphText}</p>
        </div>
        <div style={{width: '100%', margin: '10px 0'}}>
          <Button
            primary
            label={buttonLabel}
            backgroundColor={buttonBackgroundColor}
            size={buttonSize}
          />
        </div>
      </div>
    </div>
  );
}

ArtefactIntro.propTypes = {
  paragraphText: PropTypes.string
};

ArtefactIntro.defaultProps = {
  paragraphText: 'type your text'
};
