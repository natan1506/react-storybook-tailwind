import React from 'react';

import { Card } from '.';

export default {
  title: 'Card/Card',
  component: Card,
};

export const Template = (args) => <Card {...args} />;
Template.args = {
  data: {
    title: 'UX: entenda a experiencia de usuario',
    subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
  },
}