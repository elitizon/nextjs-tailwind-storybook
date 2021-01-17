import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { Hello } from "./Hello"

export default {
  title: "Component/Hello",
  component: Hello,
  argTypes: {
    color: { control: "color" }
  }
} as Meta

const Template: Story<{}> = (args) => <Hello {...args} />

export const Default = Template.bind({})
Default.args = {
  color: "red"
}
