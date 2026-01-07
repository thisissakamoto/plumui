import type { Story, StoryDefault } from "@ladle/react";
import { Card } from "../card";
import { InputGroup } from "../input";
import { ColorPicker } from ".";

export default {
  title: "Color Picker",
} satisfies StoryDefault;

export const Base: Story = () => {
  const api = ColorPicker.use({
    open: true,
    defaultValue: ColorPicker.parse("#eb5e41"),
  });

  return (
    <ColorPicker.Provider value={api}>
      <ColorPicker.Content>
        <Card.Root gap="12" maxW="256px" p="10" radius="xl" visual="elevated">
          <Card.Header>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
          </Card.Header>
          <Card.Body gap="6" orientation="vertical">
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid />
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
          </Card.Body>
          <Card.Footer gap="6" flexDir="row">
            <InputGroup.Root radius="sm" size="xs">
              <InputGroup.Content>
                <ColorPicker.ChannelInput asChild pl="8" channel="hex">
                  <InputGroup.Input />
                </ColorPicker.ChannelInput>
              </InputGroup.Content>
            </InputGroup.Root>
            <InputGroup.Root size="xs" radius="sm">
              <InputGroup.Content>
                <ColorPicker.ChannelInput asChild channel="alpha" textAlign="end">
                  <InputGroup.Input />
                </ColorPicker.ChannelInput>
              </InputGroup.Content>
            </InputGroup.Root>
          </Card.Footer>
        </Card.Root>
      </ColorPicker.Content>
      <ColorPicker.HiddenInput />
    </ColorPicker.Provider>
  );
};
