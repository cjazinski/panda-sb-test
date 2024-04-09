import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'alternative'],
      },
      table: { defaultValue: { summary: 'primary' } },
      description: 'type of button',
    },
    children: {
      description: 'value of button text',
      table: { defaultValue: { summary: 'Primary Button' } },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};
Primary.chakra = null;
Primary.decorators = [
  (Story) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Alternative = Template.bind({});
Alternative.args = {
  variant: 'alternative',
  children: 'Alternative Button',
};
