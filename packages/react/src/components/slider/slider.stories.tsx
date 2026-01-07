import { Slider } from ".";
import { getVariants } from "@plumui/presets";
import type { StoryDefault, Story } from "@ladle/react";


export default {
  title: "Slider",
  argTypes: {
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
  },
  args: {
    size: "lg",
    tone: "blue",
  },
} satisfies StoryDefault;

export const Base: Story<Slider.RootProps> = (args) => {
  return (
    <Slider.Root {...args}>
      <Slider.Control>
        <Slider.Track w="280px">
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export const Vertical: Story<Slider.RootProps> = (args) => {
  return (
    <Slider.Root orientation="vertical" {...args}>
      <Slider.Control>
        <Slider.Track h="280px">
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

const markers = [0, 20, 40, 60, 80, 100];

export const Step: Story<Slider.RootProps> = (args) => {
  return (
    <Slider.Root step={20} {...args}>
      <Slider.Control>
        <Slider.Track w="280px">
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.StepGroup>
        {markers.map((mark, idx) => {
          return (
            <Slider.Step key={idx.toString()} value={mark}/>
          )
        })}
      </Slider.StepGroup>
    </Slider.Root>
  );
};

export const VerticalStep: Story<Slider.RootProps> = (args) => {
  return (
    <Slider.Root step={20} orientation="vertical" {...args}>
      <Slider.Control>
        <Slider.Track h="280px">
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.StepGroup>
        {markers.map((mark, idx) => {
          return (
            <Slider.Step key={idx.toString()} value={mark} />
          )
        })}
      </Slider.StepGroup>
    </Slider.Root>
  );
};

export const Marker: Story<Slider.RootProps> = (args) => {
  return (
    <Slider.Root step={20} {...args}>
      <Slider.Control>
        <Slider.Track w="280px">
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.StepGroup>
        {markers.map((mark, idx) => {
          return (
            <Slider.Step key={idx.toString()} value={mark}/>
          )
        })}
      </Slider.StepGroup>
      <Slider.MarkerGroup>
        {markers.map((mark, idx) => {
          return (
            <Slider.Marker key={idx.toString()} value={mark}>
              {mark}
            </Slider.Marker>
          )
        })}
      </Slider.MarkerGroup>
    </Slider.Root>
  );
};
