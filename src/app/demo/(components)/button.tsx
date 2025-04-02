"use client";
import { ui } from "@yamada-ui/react";

export const Button = ui("button", {
  baseStyle: {
    py: "sm",
    px: "md",
    rounded: "md",
    bg: "purple.600",
    color: "white",
    w: "fit-content",
    _hover: { bg: "purple.500" },
  },
});
