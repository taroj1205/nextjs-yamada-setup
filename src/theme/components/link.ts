import type { ComponentStyle } from "@yamada-ui/react";

export const Link: ComponentStyle<"Link"> = {
  baseStyle: {
    color: "link",
    cursor: "pointer",
    outline: "none",
    textDecoration: "none",
    transitionDuration: "fast",
    transitionProperty: "common",
    transitionTimingFunction: "ease-out",
    _focusVisible: {
      boxShadow: "outline",
    },
    _hover: {
      textDecoration: "underline",
    },
  },
  defaultProps: {
    w: "fit-content",
  },
};
