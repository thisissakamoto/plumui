import type {  Story, StoryDefault } from "@ladle/react";
import { Format } from ".";

export default {
  title: "Format"
} satisfies StoryDefault;


export const Byte: Story<Format.ByteProps> = () => {
  return <Format.Byte value={12500} />
}

export const Integer: Story<Format.IntegerProps> = () => {
  return <Format.Integer value={12500} />
}

export const RelativeTime: Story<Format.RelativeTimeProps> = () => {
  return <Format.RelativeTime value={new Date("2025-09-13")} />
}
