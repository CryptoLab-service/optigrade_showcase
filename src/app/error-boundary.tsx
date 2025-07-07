'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Column, Heading, Text } from '@once-ui-system/core';

export default function ErrorBoundary({ 
  error, 
  reset 
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  
  useEffect(() => {
    console.error('Error Boundary:', error);
  }, [error]);

  return (
    <Column horizontal="center" vertical="center" minHeight="100vh" gap="m">
      <Heading variant="display-strong-m">Application Error</Heading>
      <Text variant="body-default-m" color="critical-strong">
        {error.message || 'An unexpected error occurred'}
      </Text>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="secondary" onClick={() => router.push('/')}>
          Go Home
        </Button>
      </div>
    </Column>
  );
}
