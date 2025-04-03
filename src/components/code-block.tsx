import { ScrollArea, VStack } from "@yamada-ui/react";
import { Markdown } from "@yamada-ui/markdown";
import { FC, memo, type PropsWithChildren } from "react";
import { format } from "prettier";

type PropsWithCode = PropsWithChildren & {
  code: string;
};

export const CodeBlock: FC<PropsWithCode> = memo(async ({ children, code }) => {
  return (
    <VStack>
      {children}
      <ScrollArea as={Markdown} maxH="xl">{`
\`\`\`tsx
${(await format(code.trim(), { parser: "babel" })).replace(";", "")}
\`\`\`

    `}</ScrollArea>
    </VStack>
  );
});

CodeBlock.displayName = "CodeBlock";
