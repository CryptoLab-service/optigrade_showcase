import { Column } from "@once-ui-system/core";

export function LoadingSpinner() {
  return (
    <Column horizontal="center" vertical="center" padding="xl">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
    </Column>
  );
}
