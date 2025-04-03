import { FloatingLabel } from "@/components/inputs";
import { Container, Heading, VStack, Link as UILink } from "@yamada-ui/react";
import Link from "next/link";

export default function MoreExamples() {
  return (
    <VStack>
      <Container>
        <Heading>Inputs</Heading>
        <FloatingLabel />
      </Container>
      <UILink as={Link} href="/" mx="lg">
        Go back
      </UILink>
    </VStack>
  );
}
