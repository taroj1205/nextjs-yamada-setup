import { Box, ScrollArea, VStack } from "@yamada-ui/react";
import { Markdown } from "@yamada-ui/markdown";
import { FC, memo, type PropsWithChildren } from "react";
import { format } from "prettier";
import { CopyButton } from "./copy-button";

type PropsWithCode = PropsWithChildren & {
  code: string;
};

export const CodeBlock: FC<PropsWithCode> = memo(async ({ children, code }) => {
  const formattedCode = (
    await format(code.trim(), { parser: "babel" })
  ).replace(";", "");
  return (
    <VStack>
      {children}
      <Box position="relative">
        <CopyButton value={formattedCode} />
        <ScrollArea maxH="xl">
          <Markdown>
            {`
\`\`\`tsx
${formattedCode}
\`\`\`

    `}
          </Markdown>
        </ScrollArea>
      </Box>
    </VStack>
  );
});

CodeBlock.displayName = "CodeBlock";
