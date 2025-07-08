// src/components/NotFound.tsx
'use client';

import { Column, Heading, Text, Button } from '@once-ui-system/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Column horizontal="center" vertical="center" minHeight="100vh" gap="m">
      <Heading variant="display-strong-l">404</Heading>
      <Text variant="body-strong-m">Page not found</Text>
      <Text variant="body-default-m" textAlign="center">
        Sorry, we couldn't find the page you're looking for.
      </Text>
      <Link href="/">
        <Button marginTop="l">Go back home</Button>
      </Link>
    </Column>
  );
}
