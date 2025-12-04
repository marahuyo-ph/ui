import preview from '#.storybook/preview';
import { Button } from '#registry/headless/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = preview.meta({
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant:{control:"select",options:["link","default","destructive","outline","secondary","ghost"],defaultValue:"ghost"},
    size:{control:"select",options:["default","sm","lg","icon","icon-sm","icon-lg"]}
  },
});


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = meta.story({
  args:{
    variant:"default",
    size:"default",
    children:"hello"
  }
});

export const Secondary = meta.story({
  
});

export const Large = meta.story({
  
});

export const Small = meta.story({
 
});