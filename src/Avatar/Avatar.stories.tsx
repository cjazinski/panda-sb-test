// Generated with util/create-component.js
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Generated/Avatar',
  component: Avatar,
  argTypes: {
    someProp: {
      defaultValue: 'Hello World',
    },
  },
} as Meta<typeof Avatar>;
const Template: StoryFn<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  someProp: 'init value',
};
