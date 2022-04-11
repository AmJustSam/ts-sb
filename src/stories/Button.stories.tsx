import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Props } from "../Components/Button";

const meta: Meta = {
  title: "Welcome",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Hello",
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  variant: "primary",
  children: "Hello World",
  checked: false,
  onClick: action("something"),
};

Primary.args = {};
