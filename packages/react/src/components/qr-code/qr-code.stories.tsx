import type { Story, StoryDefault } from "@ladle/react";
import { ButtonGroup } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { QrCode } from ".";

export default {
  title: "Qr code",
} satisfies StoryDefault;

export const Base: Story = () => {
  return (
    <QrCode.Root defaultValue="https://ark-ui.com">
      <Card.Root visual="elevated" orientation="vertical" radius="2xl" w="320px">
        <Card.Header orientation="vertical" p="16">
          <Card.Title textAlign="center">
            Your QR Code
          </Card.Title>
          <Card.Description textAlign="center">
            Place your phone camera over the entire QR code to scan it.
          </Card.Description>
        </Card.Header>
        <Card.Body justifyContent="center">
          <QrCode.Frame boxSize="160px">
            <QrCode.Pattern />
          </QrCode.Frame>
        </Card.Body>
        <Card.Footer p="16" justifyContent="center">
          <ButtonGroup.Root tone="blue">
            <QrCode.DownloadTrigger asChild fileName="qr-code.png" mimeType="image/png">
              <ButtonGroup.Item>
                <Icon icon="lucide:arrow-down-to-line" />
                Download
              </ButtonGroup.Item>
            </QrCode.DownloadTrigger>
            <ButtonGroup.Item>
              <Icon icon="lucide:share-2" />
              Share
            </ButtonGroup.Item>
          </ButtonGroup.Root>
        </Card.Footer>
      </Card.Root>
    </QrCode.Root>
  );
};
