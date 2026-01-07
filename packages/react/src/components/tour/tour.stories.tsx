import type { Meta, Story } from "@ladle/react";
import { Tour } from ".";

const meta: Meta = {
  title: "Tour",
  component: Tour.Root,
}
export default meta;

export const Basic: Story<Tour.RootProps> = () => {
  return (
    <Tour.Root></Tour.Root>
  )
}
