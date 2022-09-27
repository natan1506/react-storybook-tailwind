import React from 'react';

import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Template = (args) => <Card {...args} />;
Template.args = {
  title: 'UX: entenda a experiencia de usuario',
  subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
}