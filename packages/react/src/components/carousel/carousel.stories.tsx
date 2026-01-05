import type { StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Icon } from "../icon";
import { Image } from "../image";
import { Carousel } from ".";

export default {
  title: "Carousel",
} satisfies StoryDefault;

export const Base = () => {
  const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`);

  return (
    <Carousel.Root slideCount={images.length} defaultPage={0} spacing="12px">
      <Carousel.Control alignItems="center" gap="16">
        <Carousel.PrevTrigger asChild>
          <IconButton tone="neutral" visual="surface">
            <Icon icon="lucide:chevron-left" />
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.ItemGroup flex="1">
          {images.map((image, idx) => {
            return (
              <Carousel.Item index={idx} key={idx.toString()}>
                <Image src={image} alt={`slide ${idx}`} w="full" radius="lg" h="320px" />
              </Carousel.Item>
            )
          })}
        </Carousel.ItemGroup>
        <Carousel.NextTrigger asChild>
          <IconButton tone="neutral" visual="surface">
            <Icon icon="lucide:chevron-right" />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
};
