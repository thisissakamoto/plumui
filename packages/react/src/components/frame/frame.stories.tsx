import type { Story, StoryDefault } from "@ladle/react";
import { Stack } from "../stack";
import { Text } from "../text";
import { Frame } from ".";

export default {
	title: "Frame",
} satisfies StoryDefault

export const Base: Story = () => {
	return (
		<Frame h="320" w="400px" rounded="6" title="Custom" border={"1px solid {colors.stroke}"}>
			<Stack style={{ height: "310", display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Text style={{ textAlign: "center", color: "var(--colors-fg-emphasized)" }}>
					This content is inside a frame component
				</Text>
			</Stack>
		</Frame>
	);
};
