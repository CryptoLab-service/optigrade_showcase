'use client';

import { useEffect } from 'react';
import { Button, Column, Heading, Text } from '@once-ui-system/core';
import ErrorBoundary from './error-boundary';

export default function GlobalError({ 
  error, 
  reset 
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorBoundary error={error} reset={reset} />
      </body>
    </html>
  );
}
