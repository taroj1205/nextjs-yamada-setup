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
        <FormControl
          position="relative"
          w="sm"
          errorMessage="Email is required."
        >
          <Input
            className="peer"
            type="email"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="Email"
            _placeholder={{
              opacity: 0,
            }}
          />
          <Label
            position="absolute"
            top="0"
            left="sm"
            px="xs"
            transition="all 0.2s"
            mb="0"
            _peerPlaceholderShown={{
              transform: "translateY(25%)",
              color: "gray",
            }}
            _peerFocus={{
              top: 0,
              left: "sm",
              transform: "translateY(-50%) scale(0.8)",
              zIndex: 1,
              bg: ["white", "black"],
              color: ["black", "white"],
            }}
            css={{
              "&:not(:placeholder-shown)": {
                top: 0,
                left: "sm",
                transform: "translateY(-50%) scale(0.8)",
                zIndex: 1,
                bg: ["white", "black"],
                color: ["black", "white"],
              },
            }}
          >
            Email
          </Label>
        </FormControl>
    `}
      >
        <FormControl
          position="relative"
          w="sm"
          errorMessage="Email is required."
        >
          <Input
            className="peer"
            type="email"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="Email"
            _placeholder={{
              opacity: 0,
            }}
          />
          <Label
            position="absolute"
            top="0"
            left="sm"
            px="xs"
            transition="all 0.2s"
            mb="0"
            _peerPlaceholderShown={{
              transform: "translateY(25%)",
              color: "gray",
            }}
            _peerFocus={{
              top: 0,
              left: "sm",
              transform: "translateY(-50%) scale(0.8)",
              zIndex: 1,
              bg: ["white", "black"],
              color: ["black", "white"],
            }}
            css={{
              "&:not(:placeholder-shown)": {
                top: 0,
                left: "sm",
                transform: "translateY(-50%) scale(0.8)",
                zIndex: 1,
                bg: ["white", "black"],
                color: ["black", "white"],
              },
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
