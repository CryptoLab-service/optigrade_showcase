import { Button, Column, Heading, Text } from "@once-ui-system/core";

export function ErrorFallback({ 
  error, 
  resetErrorBoundary 
}: { 
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <Column role="alert" gap="m" padding="m">
      <Heading variant="heading-strong-m">Something went wrong</Heading>
      <Text variant="body-default-m">{error.message}</Text>
      <Button 
        onClick={resetErrorBoundary}
        variant="primary"
        size="m"
      >
        Try Again
      </Button>
    </Column>
  );
}
