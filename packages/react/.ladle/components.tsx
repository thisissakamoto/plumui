import "./ladle.css";
import React from "react";
import "@plumui/styled/styles.css";
import type { GlobalProvider } from "@ladle/react";
import { Container } from "../src/components/container";
import { Stack } from "../src/components/stack";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  React.useEffect(() => {
    if (globalState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [globalState.theme]);

  return (
    <Container maxW="560px">
      <Stack justify="center" py="40" items="center" minH="100dvh">
        {children}
      </Stack>
    </Container>
  );
};
