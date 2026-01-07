import type { Meta, Story } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { RatingGroup } from ".";


const meta: Meta = {
	title: "Rating Group",
	component: RatingGroup.Root,
	argTypes: {
		tone: {
			control: { type: "select" },
			options: getVariants("tone").values,
		},
	},
	args: {
		tone: "blue",
	},
};
export default meta;

export const Default: Story<RatingGroup.RootProps> = (args) => (
	<RatingGroup.Root {...args} defaultValue={1}>
		<RatingGroup.Control>
			<RatingGroup.Context>
				{({ items }) =>
					items.map((item) => (
						<RatingGroup.Item key={item} index={item}>
							<Icon boxSize="32px" icon="ph:star-fill" fill="current"/>
						</RatingGroup.Item>
					))
				}
			</RatingGroup.Context>
			<RatingGroup.HiddenInput />
		</RatingGroup.Control>
	</RatingGroup.Root>
);
