import { Column, Heading, Text, Button } from '@once-ui-system/core';
import Link from 'next/link';
import { LayoutContext } from './layout'; // FIX: Import context

// FIX: Consume context even if not used directly
export default function NotFound() {
  return (
    <LayoutContext.Consumer>
      {() => (
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
      )}
    </LayoutContext.Consumer>
  );
}
