import { CodeBlock } from "@/components/code-block";
import { YamadaUIIcon } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GithubIcon } from "@yamada-ui/lucide";
import {
  Button,
  Container,
  Heading,
  IconButton,
  Text,
  Link as UILink,
  VStack,
  HStack,
  Separator,
} from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <VStack>
        <Heading>Next.js + Yamada UI</Heading>

        <CodeBlock
          code={`
<UILink as={Link} href="/demo">
  Using Next.js Link example
</UILink>
          `}
        >
          <UILink as={Link} href="/demo">
            Using Next.js Link example
          </UILink>
        </CodeBlock>

        <CodeBlock
          code={`
<UILink as="a" href="/demo">
  Using {'<a />'} example
</UILink>
          `}
        >
          <UILink as="a" href="/demo">
            Using {"`<a />`"} example
          </UILink>
        </CodeBlock>

        <CodeBlock
          code={`<Button as={Link} href="/demo" variant="link">Using Button but Link-style</Button>`}
        >
          <Button as={Link} href="/demo" variant="link">
            Using Button but Link-style
          </Button>
        </CodeBlock>

        <CodeBlock
          code={`<Button as={Link} href="/demo" colorScheme="primary">Button Link</Button>`}
        >
          <Button as={Link} href="/demo" colorScheme="primary">
            Button Link
          </Button>
        </CodeBlock>

        <Text>Yamada UI already has a support for Dark mode.</Text>
        <ThemeSwitcher />

        <Separator />
        <Heading as="h2">Some links</Heading>

        <HStack>
          <IconButton
            as={Link}
            href="https://github.com/taroj1205/nextjs-yamada-setup"
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            as={Link}
            href="https://yamada-ui.com/"
            colorScheme="purple"
          >
            <YamadaUIIcon />
          </IconButton>
        </HStack>
      </VStack>
    </Container>
  );
}
