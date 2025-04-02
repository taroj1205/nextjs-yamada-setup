import { VStack } from "@yamada-ui/react";
import { Markdown } from "@yamada-ui/markdown";
import { FC, memo, type PropsWithChildren } from "react";

type PropsWithCode = PropsWithChildren & {
  code: string;
};

export const CodeBlock: FC<PropsWithCode> = memo(({ children, code }) => {
  return (
    <VStack>
      {children}
      <Markdown>{`
\`\`\`tsx
${code.trim()}
\`\`\`

    `}</Markdown>
    </VStack>
  );
});

CodeBlock.displayName = "CodeBlock";
