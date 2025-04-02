import Link from "next/link";
import { Container, Link as UILink } from "@yamada-ui/react";

export default function Demo() {
  return (
    <Container>
      <UILink as={Link} href="/">
        Go Back
      </UILink>
    </Container>
  );
}
