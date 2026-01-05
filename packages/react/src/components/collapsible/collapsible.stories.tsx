import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Image } from "../image";
import { Collapsible } from ".";

export default {
  title: "Collapsible",
} satisfies StoryDefault;

export const Base: Story<Collapsible.RootProps> =() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <Button visual="surface">
          Preview HeroUI Native
          <Collapsible.Indicator>
            <Icon icon="lucide:chevron-down" />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Card.Root visual="outlined" radius="2xl" mt="16" w="380px" p="16">
          <Card.Header>
            <Card.Subtitle textAlign="center" fontSize="14" color="fg.subtle" fontWeight="400" lineHeight="md">
              Scan this QR code with your camera app to visit the documentation website.
            </Card.Subtitle>
          </Card.Header>
          <Card.Media mt="8">
            <Image align="center" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png" alt="QR Code" />
          </Card.Media>
          <Card.Body mt="4">
            <Card.Description w="full" textAlign="center">
              Built with Fumadocs and Next.js.
            </Card.Description>
          </Card.Body>
          <Card.Footer mt="16">
            <Button mx="auto">
              Visit Repo
            </Button>
          </Card.Footer>
        </Card.Root>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
