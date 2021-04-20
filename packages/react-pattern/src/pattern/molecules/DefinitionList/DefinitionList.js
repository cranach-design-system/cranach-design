import React from 'react';
import PropTypes from 'prop-types';
import './definitionList.css';

export const DefinitionList = ({ definitionData }) => {
  return (
    <div className="column">
      <dl className="definition-list">
        <dt className="definition-list-term">Zuschreibung</dt>
        <dd className="definition-list-definition">
          <p>
            <span>
                Lucas Cranach der Ältere, Inventor
            </span>
          </p>
        </dd>
        <dt className="definition-list-term">Datierung</dt>
        <dd className="definition-list-definition">
          <p>
            <span>
                1509 [Titelblock und 2. Block datiert]
            </span>
          </p>
        </dd>
      </dl>
    </div>
  );
}
