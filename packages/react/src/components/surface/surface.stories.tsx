import { StoryDefault } from "@ladle/react";
import { Surface } from "./surface";
import { Card } from "../card";
import { Box } from "../box";

export default {
  title: "Surface",
} satisfies StoryDefault;

export const Base = () => {
  const contrasts = ["low", "mid", "high", "max"];

  return (
    <Box maxW="400px" spaceY="20">
      {contrasts.map((contrast) => {
        return (
          <Card.Root visual="ghost" key={contrast} radius="2xl">
            <Surface contrast={contrast as "low"} p="16" rounded="inherit" gap="8" flexDir="column">
              <Card.Title fontSize="14">
                Surface Content
              </Card.Title>
              <Card.Description>
                This is a default surface variant. It uses bg-surface styling.
              </Card.Description>
            </Surface>
          </Card.Root>
        )
      })}
    </Box>
  )
};
