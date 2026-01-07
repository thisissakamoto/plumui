import type { StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { ScrollShadow } from "./scroll-shadow";

export default {
  title: "Scroll Shadow",
} satisfies StoryDefault;

export const Base = () => {
  return (
    <Card.Root orientation="vertical" p="16" maxW="360px" visual="elevated" radius="2xl">
      <Card.Header orientation="vertical">
        <Card.Title>
          Terms and Conditions
        </Card.Title>
        <Card.Subtitle mt="4" color="fg.subtle" fontSize="12">
          Please review before proceeding
        </Card.Subtitle>
      </Card.Header>
      <Card.Body mt="16">
        <ScrollShadow maxH="300px" hideScrollBar px="12" spaceY="20">
          {Array.from({ length: 10 }).map((_, idx) => {
            return (
              <Card.Description key={idx.toString()} color="fg" fontSize="16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </Card.Description>
            )
          })}
        </ScrollShadow>
      </Card.Body>
      <Card.Footer gap="8" mt="16" flexDir="row">
        <Button wide visual="surface">Decline</Button>
        <Button wide>Accept</Button>
      </Card.Footer>
    </Card.Root>
  )
};
