import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Hero, HeroProps } from "."

export default {
  title: "Component/Hero",
  component: Hero,
  argTypes: {
    title: { control: "string" }
  }
} as Meta

const Template: Story<HeroProps> = (args) => <Hero {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}

// Title = "Hello World"
export const TitleHelloWorld = Template.bind({})
TitleHelloWorld.args = {
  title: "Hello World"
}
