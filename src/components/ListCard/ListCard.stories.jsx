import React from 'react';

import { Card } from '../Card';

export default {
  title: 'Card/ListCard',
  component: Card,
};

const ListCard = ({data, ...args}) => 
  (
    <div {...args}>
      {data.map(item => (
        <Card data={item} />
      ))}
    </div>
  );

export const Template = ListCard.bind({})
Template.args = {
  data: [
    {
      title: 'UX: entenda a experiencia de usuario',
      subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
    },
    {
      title: 'Exemplo 2',
      subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
    },
    {
      title: 'Exemplo 3',
      subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ...'
    },
  ]
}