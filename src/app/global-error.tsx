'use client';

import { Button, Column, Heading, Text } from '@once-ui-system/core';
import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  // FIX: Added error logging
  useEffect(() => {
    console.error('Global Error:', error);
    // Add your critical error logging here
    // logCriticalErrorToService(error);
  }, [error]);

  return (
    <html>
      <body>
        <Column horizontal="center" vertical="center" minHeight="100vh" gap="m">
          <Heading variant="display-strong-l">Critical Error</Heading>
          <Text variant="body-strong-m" color="critical-strong">
            {error.message || 'A fatal error occurred'}
          </Text>
          {error.digest && (
            <Text variant="body-default-s" color="neutral-weak">
              Error ID: {error.digest}
            </Text>
          )}
          <Button 
            marginTop="l"
            onClick={() => reset()}
          >
            Try again
          </Button>
        </Column>
      </body>
    </html>
  );
}
