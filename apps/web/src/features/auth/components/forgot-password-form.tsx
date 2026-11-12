'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Brand } from '@/components/brand/brand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StatusMessage } from '@/components/ui/status-message';

export function ForgotPasswordForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="auth-shell auth-shell--reset">
      <section className="auth-card password-reset-card">
        <Link className="reset-back-link" href="/login">
          <Brand />
        </Link>
        <div className="auth-card-heading">
          <span className="eyebrow">ACCOUNT SUPPORT</span>
          <h1 className="password-reset-heading">Reset your password</h1>
          <p className="password-reset-description">
            Enter the email address linked to your membership. We&apos;ll guide
            you through the next step.
          </p>
        </div>
        {submitted ? (
          <StatusMessage message="If the email is registered, password reset instructions will be sent. This is a frontend demonstration." />
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="auth-form"
          >
            <div className="field">
              <Label className="field-label" htmlFor="reset-email">
                Email address
              </Label>
              <Input
                id="reset-email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <Button className="auth-submit" type="submit">
              Continue
            </Button>
          </form>
        )}
        <div className="auth-register-prompt reset-prompt">
          <span>Remembered your password?</span>
          <Link className="register-link" href="/login">
            Back to sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
