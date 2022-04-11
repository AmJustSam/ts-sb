import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Welcome',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Hello',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  variant: 'primary',
  children: 'Hello World',
  checked: false,
  onClick: action('something'),
};

Primary.args = {};
