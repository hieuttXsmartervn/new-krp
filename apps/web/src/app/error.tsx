'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application route error:', error);
  }, [error]);

  return (
    <main className="error-page">
      <h1>Something went wrong</h1>
      <p>We could not load this page. Please try again.</p>
      <Button type="button" onClick={reset}>
        TRY AGAIN
      </Button>
    </main>
  );
}
