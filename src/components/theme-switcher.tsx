"use client";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuOptionItem,
  useColorMode,
} from "@yamada-ui/react";
import { MoonIcon, SunIcon } from "@yamada-ui/lucide";
import type { ColorModeWithSystem } from "@yamada-ui/react";
import { memo } from "react";

export const ThemeSwitcher = memo(() => {
  const { internalColorMode, changeColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={IconButton} variant="subtle">
        <SunIcon display={["inline-block", "none"]} />
        <MoonIcon display={["none", "inline-block"]} />
      </MenuButton>
      <MenuList>
        <MenuOptionGroup<ColorModeWithSystem>
          type="radio"
          value={internalColorMode}
          onChange={changeColorMode}
        >
          <MenuOptionItem closeOnSelect value="light">
            Light
          </MenuOptionItem>
          <MenuOptionItem closeOnSelect value="dark">
            Dark
          </MenuOptionItem>
          <MenuOptionItem closeOnSelect value="system">
            System
          </MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
