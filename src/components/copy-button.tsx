"use client";
import { IconButton, useClipboard } from "@yamada-ui/react";
import { FC, memo, type PropsWithChildren } from "react";
import { CheckIcon, CopyIcon } from "@yamada-ui/lucide";

type PropsWithCode = PropsWithChildren & {
  value: string;
};

export const CopyButton: FC<PropsWithCode> = memo(({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);

  return (
    <IconButton
      onClick={onCopy}
      icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
      position="absolute"
      top="sm"
      right="sm"
      variant="outline"
    />
  );
});

CopyButton.displayName = "CopyButton";
