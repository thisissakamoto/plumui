import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Download, type DownloadProps } from ".";

export default {
  title: "Download",
} satisfies StoryDefault;

export const Base: Story<DownloadProps> = () => {
  return (
    <Download asChild data="Hello world" fileName="hello.txt" mimeType="text/plain">
      <Button>
        Download
      </Button>
    </Download>
  )
};
