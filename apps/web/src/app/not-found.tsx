import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="error-page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Button asChild>
        <Link href="/login">BACK TO SIGN IN</Link>
      </Button>
    </main>
  );
}
