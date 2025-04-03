import { FormControl, Heading, Input, Label, VStack } from "@yamada-ui/react";
import { FC, memo } from "react";
import { CodeBlock } from "../code-block";

export const FloatingLabel: FC = memo(() => {
  return (
    <VStack>
      <Heading as="h2" fontSize="xl">
        Filled
      </Heading>
      <CodeBlock
        code={`
      <FormControl position="relative" w="sm">
        <Input className="peer" />
        <Label
          position="absolute"
          top="50%"
          left="sm"
          transform="translateY(-50%)"
          px="xs"
          transition="all 0.2s"
          color="muted"
          _peerFocus={{
            top: 0,
            left: "sm",
            transform: "translateY(-50%) scale(0.8)",
            zIndex: 1,
            bg: ["white", "black"],
            color: ["black", "white"],
          }}
        >
          Email
        </Label>
      </FormControl>
    `}
      >
        <FormControl position="relative" w="sm">
          <Input className="peer" />
          <Label
            position="absolute"
            top="50%"
            left="sm"
            transform="translateY(-50%)"
            px="xs"
            transition="all 0.2s"
            color="muted"
            _peerFocus={{
              top: 0,
              left: "sm",
              transform: "translateY(-50%) scale(0.8)",
              zIndex: 1,
              bg: ["white", "black"],
              color: ["black", "white"],
            }}
          >
            Email
          </Label>
        </FormControl>
      </CodeBlock>
    </VStack>
  );
});

FloatingLabel.displayName = "FloatingLabel";
