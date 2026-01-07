import type { Story, StoryDefault } from "@ladle/react";
import { AngleSlider } from ".";

export default {
  title: "Angle Slider",
} satisfies StoryDefault;

export const Base: Story = () => {
  return (
    <AngleSlider.Root>
      <AngleSlider.Control>
        <AngleSlider.Thumb />
        <AngleSlider.MarkerGroup>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((value) => (
            <AngleSlider.Marker key={value} value={value} />
          ))}
        </AngleSlider.MarkerGroup>
      </AngleSlider.Control>
      <AngleSlider.ValueText mt="8" />
      <AngleSlider.HiddenInput />
    </AngleSlider.Root>
  )
}
