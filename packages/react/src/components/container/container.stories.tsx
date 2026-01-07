import type { StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Container } from "./container";

export default {
  title: "Container",
} satisfies StoryDefault;


export const Base = () => {
  return (
    <DecorativeBox p="24">
      <Container h="120px" maxW="400px">
        <DecorativeBox />
      </Container>
    </DecorativeBox>
  )
};
