import { TagsInput } from ".";
import { Button } from "../button";
import { InputGroup } from "../input";
import type { Story, StoryDefault } from "@ladle/react";

export default {
	title: "Tags Input",
} satisfies StoryDefault


export const Base: Story<TagsInput.RootProps> = () => {
  return (
    <TagsInput.Root spaceY="6" defaultValue={["react", "vue"]}>
      <TagsInput.Control asChild>
        <InputGroup.Root visual="elevated" w="320px" radius="xl">
          <InputGroup.Content>
            <TagsInput.Context>
              {({ value }) => {
                return (
                  <InputGroup.Addon p="8" gap="4" flexWrap="wrap" justifyContent="start">
                    {value.map((tag, index) => (
                      <TagsInput.Item asChild key={tag} value={tag} index={index}>
                        <Button visual="soft" size="xs" fontSize="14" tone="neutral" radius="full">
                          <TagsInput.ItemText>
                            {tag}
                          </TagsInput.ItemText>
                        </Button>
                      </TagsInput.Item>
                    ))}
                    <TagsInput.Input asChild placeholder="Skills...">
                      <InputGroup.Input />
                    </TagsInput.Input>
                  </InputGroup.Addon>
                );
              }}
            </TagsInput.Context>
          </InputGroup.Content>
        </InputGroup.Root>
      </TagsInput.Control>
      <TagsInput.HiddenInput name="technologies" />
    </TagsInput.Root>
  );
};
