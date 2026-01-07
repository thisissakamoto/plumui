import type { StoryDefault } from "@ladle/react";
import { Box } from "../box";
import { Text } from "../text";
import { Surface } from "./surface";

export default {
  title: "Surface",
} satisfies StoryDefault;

export const Base = () => {
  const contrasts = ["low", "mid", "high", "max"];

  return (
    <Box maxW="400px" spaceY="20">
      {contrasts.map((contrast) => {
        return (
          <Surface key={contrast} contrast={contrast as "low"} p="16" rounded="inherit" gap="8" flexDir="column">
            <Text fontSize="14">
              Surface Content
            </Text>
            <Text>
              This is a default surface variant. It uses bg-surface styling.
            </Text>
          </Surface>
        )
      })}
    </Box>
  )
};
