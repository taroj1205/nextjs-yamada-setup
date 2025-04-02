import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Button,
  Container,
  Heading,
  Text,
  Link as UILink,
  VStack,
} from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <VStack>
        <Heading>Next.js + Yamada UI</Heading>
        <UILink as={Link} href="/demo">
          Using Next.js Link example
        </UILink>
        <UILink as="a" href="/demo">
          Using {"`<a />`"} example
        </UILink>
        <Button as={Link} href="/demo" variant="link">
          Using Button but Link-style
        </Button>
        <Button as={Link} href="/demo" colorScheme="primary">
          Button Link
        </Button>
        <Text>Yamada UI already has a support for Dark mode.</Text>
        <ThemeSwitcher />
      </VStack>
    </Container>
  );
}
