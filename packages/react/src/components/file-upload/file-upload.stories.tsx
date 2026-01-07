import type { Story, StoryDefault } from "@ladle/react";
import { Badge } from "../badge";
import { Button, ButtonGroup } from "../button";
import { Icon } from "../icon";
import { Separator } from "../separator";
import { Surface } from "../surface";
import { FileUpload } from ".";

export default {
  title: "File Upload",
} satisfies StoryDefault;

export const Base: Story = () => {

  return (
    <FileUpload.Root maxFiles={5}>
      <FileUpload.Context>
        {({ acceptedFiles }) => {
          const hasFiles = acceptedFiles.length > 0;

          return (
            <>
              <FileUpload.Trigger hidden={hasFiles} asChild>
                <Button size="lg">Add documents</Button>
              </FileUpload.Trigger>
              <Separator thickness="none" spaceY="xl" />
              <FileUpload.ItemGroup spaceY="4">
                {acceptedFiles.map((file) => (
                  <FileUpload.Item w="320px" file={file} key={file.name}>
                    <Surface radius="md" p="8" pl="12" alignItems="center" contrast="low">
                      <FileUpload.ItemName flex="1" />
                      <ButtonGroup.Root size="xs" visual="soft">
                        <ButtonGroup.Item iconOnly>
                          <Badge iconOnly size="2xs" tone="green">
                            <Icon boxSize="14px" icon="lucide:check" />
                          </Badge>
                        </ButtonGroup.Item>
                        <FileUpload.ItemDeleteTrigger asChild>
                          <ButtonGroup.Item iconOnly>
                            <Icon icon="lucide:x" boxSize="14px" />
                          </ButtonGroup.Item>
                        </FileUpload.ItemDeleteTrigger>
                      </ButtonGroup.Root>
                    </Surface>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </>
          );
        }}
      </FileUpload.Context>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
