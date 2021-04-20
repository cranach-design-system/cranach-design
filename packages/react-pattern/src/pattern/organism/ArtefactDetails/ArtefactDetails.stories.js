import React from 'react';

import { ArtefactDetails } from './ArtefactDetails';

export default {
  title: 'Organism/ArtefactDetails',
  component: ArtefactDetails,
};

export const Template = (args) => (
  <div>
    <ArtefactDetails {...args} />
  </div>
)
