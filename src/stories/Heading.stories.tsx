import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Heading, Props } from "../Components/Heading";

const meta: Meta = {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      defaultValue: "Hello",
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  children: "Hello World",
  checked: false,
  onClick: action("something"),
};

Primary.args = {};
