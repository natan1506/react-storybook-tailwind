import React from 'react';

import { Login } from '.';

export default {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Login {...args} />;
