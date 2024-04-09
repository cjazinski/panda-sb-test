// Generated with util/create-component.js
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Generated/Alert',
  component: Alert,
  argTypes: {
    type: {
      defaultValue: 'success',
    },
    variant: {
      defaultValue: 'solid',
    },
  },
} as Meta<typeof Alert>;
const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Success',
  message: 'This is a success alert',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Info',
  message: 'This is a info alert',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Warning',
  message: 'This is a warning alert',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  title: 'Error',
  message: 'This is a error alert',
};
