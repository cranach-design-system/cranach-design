import React from 'react';
import PropTypes from 'prop-types';
import './artefactDetails.css';
import { Logo } from '../../atoms/Logo'
import { Button } from '../../atoms/Button'
import { Title } from '../../atoms/Title'
import { ArtefactCard } from '../../molecules/ArtefactCard'
import { DefinitionList } from '../../molecules/DefinitionList'

export const ArtefactDetails = ({ chapterTitle, imgSrc, itemTitle, itemSubtitle, itemText }) => {
  return (
    <div className="graphic-details-item">
        <div className="graphic-details-item-header">
          <h2 className="chapter-title">{chapterTitle}</h2>
        </div>
        <div className="graphic-detail-item-content">
          <div className="graphic-detail-item-content-image">
            <figure className="figure-image">
              <div className="image-holder">
                <img src={imgSrc}/>
              </div>
            </figure>
          </div>
          <div className="graphic-detail-item-content-info">
            <header className="graphic-details-item-header">
              <Title
                text={itemTitle}
                />
              <h2 className="subtitle">{itemSubtitle}</h2>
            </header>

            <div className="graphic-detail-item-content-info-content">
              <div className="column">
                <div className="copy-text"><p>{itemText}</p></div>
              </div>
              {/*<DefinitionList />*/}
            </div>
          </div>
        </div>
      </div>
  );
}

ArtefactDetails.propTypes = {
  chapterTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  itemTitle: PropTypes.string,
  itemSubtitle: PropTypes.string,
  itemText: PropTypes.string
};

ArtefactDetails.defaultProps = {
  chapterTitle: 'Werknormdaten',
  imgSrc: 'https://lucascranach.org/imageserver/G_AT_A_DG1929-129/01_Overall/G_AT_A_DG1929-129_Overall-l.jpg',
  itemTitle: 'Title: Doppelbildnis Friedrichs des Weise, Kurfürst von Sachsen, und Johann des Beständigen, Herzog von Sachsen (Titelbild des Wittenberger Heiltumbuchs)',
  itemSubtitle: 'Druckgrafik, Kupferstich',
  itemText: 'Entgegen jüngster Stimmen in der Forschung [1] kann die Entstehung dieses Holzschnitts aufgrund neuer archivalischer Funde eindeutig für das Jahr 1522 nachgewiesen werden'
};
