'use client';

import { Button, Column, Heading, Text } from '@once-ui-system/core';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  // FIX: Added error logging
  useEffect(() => {
    console.error('Client Error:', error);
    // Add your error logging service here
    // logErrorToService(error);
  }, [error]);

  return (
    <Column horizontal="center" vertical="center" minHeight="100vh" gap="m">
      <Heading variant="display-strong-m">Something went wrong!</Heading>
      <Text variant="body-default-m" color="critical-strong">
        {error.message || 'An unexpected error occurred'}
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
  );
}
