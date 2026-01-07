import { Splitter } from ".";
import { DecorativeBox } from "../decorative-box";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Splitter",
} satisfies StoryDefault;

export const Base: Story = () => {
	return (
		<Splitter.Root panels={[{ id: "a" }, { id: "b" }]}>
			<Splitter.Panel asChild h="200px" id="a">
			  <DecorativeBox visual="filled" />
			</Splitter.Panel>
			<Splitter.ResizeTrigger id="a:b" />
			<Splitter.Panel asChild h="200px" id="b">
			  <DecorativeBox visual="filled" />
			</Splitter.Panel>
		</Splitter.Root>
	);
};

export const Vertical: Story = () => {
	return (
		<Splitter.Root maxH="400px" orientation="vertical" panels={[{ id: "a" }, { id: "b" }]}>
			<Splitter.Panel asChild w="400px" id="a">
			  <DecorativeBox visual="filled" />
			</Splitter.Panel>
			<Splitter.ResizeTrigger id="a:b"/>
			<Splitter.Panel asChild w="400px" id="b">
			  <DecorativeBox visual="filled" />
			</Splitter.Panel>
		</Splitter.Root>
	);
};
