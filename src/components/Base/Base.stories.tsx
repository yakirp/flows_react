import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Base from "./Base";
import { Meta } from "@storybook/react/types-6-0";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: Base,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    apiKey: "Hello world!",
    projectId:"https://api.github.com/users/mralexgray/repos",
    userId:"mralexgray",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    apiKey: "eb37a714040690d04b6df617b901fe02",
    projectId:"1a62bb59-8e12-4ea5-bbc5-3a5f21a560ab",
    userId:"mralexgray",
    userGroupId:"sadfsade3"
};