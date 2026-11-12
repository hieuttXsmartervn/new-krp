'use client';

import './globals.css';
import { Button } from '@/components/ui/button';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="error-page">
          <h1>Application error</h1>
          <p>The portal could not start. Please try again.</p>
          <Button type="button" onClick={reset}>
            TRY AGAIN
          </Button>
        </main>
      </body>
    </html>
  );
}
