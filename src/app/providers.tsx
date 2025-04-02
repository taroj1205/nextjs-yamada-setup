"use client";

import { FC, memo, PropsWithChildren } from "react";
import { UIProvider } from "@yamada-ui/react";
import { config, defaultTheme } from "../theme";

export const Providers: FC<PropsWithChildren> = memo(({ children }) => {
  return (
    <UIProvider config={config} theme={defaultTheme}>
      {children}
    </UIProvider>
  );
});

Providers.displayName = "Providers";
