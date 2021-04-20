import React from 'react';

import { ArtefactCard } from './ArtefactCard';

export default {
  title: 'Molecules/ArtefactCard',
  component: ArtefactCard,
};

export const Template = (args) => (
  <div style={{ width: '300px' }}>
    <ArtefactCard {...args} />
  </div>
)

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'ArtefactCard',
// };
