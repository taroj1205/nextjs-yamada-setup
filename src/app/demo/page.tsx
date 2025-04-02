import Link from "next/link";
import { Container, Heading } from "@yamada-ui/react";
import { Button } from "./(components)/button";
import { CodeBlock } from "@/components/code-block";

export default function Demo() {
  return (
    <Container>
      <Heading>Creating Custom Component</Heading>
      <CodeBlock
        code={`
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
})
      `}
      >
        <Button as={Link} href="/">
          Go Back
        </Button>
      </CodeBlock>
    </Container>
  );
}
