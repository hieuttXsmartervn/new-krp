'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Brand } from '@/components/brand/brand';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StatusMessage } from '@/components/ui/status-message';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function LoginForm() {
  const [message, setMessage] = useState('');

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      'Frontend demo only. Authentication will be connected when the backend is available.',
    );
  }

  return (
    <main className="auth-shell auth-shell--login">
      <div className="auth-layout">
        <aside className="auth-showcase">
          <div className="auth-showcase-brand">
            <Brand variant="light" />
          </div>
          <div className="auth-showcase-copy">
            <span className="eyebrow">DISCIPLINE · RESPECT · PERSEVERANCE</span>
            <h2>
              One community.
              <br />
              Built to grow.
            </h2>
            <p>
              Your home for membership, training and connection across the
              International Karate Alliance KyokushinRyu.
            </p>
          </div>
          <div className="auth-showcase-footer">
            <ShieldCheck size={17} aria-hidden="true" />
            <span>A dedicated space for IKAK members</span>
            <span className="showcase-index">01 / IKAK</span>
          </div>
        </aside>
        <section className="auth-card auth-card--login">
          <div className="auth-card-heading">
            <span className="eyebrow">MEMBER ACCESS</span>
            <h1 className="auth-heading">Welcome back</h1>
            <p>Sign in to continue to your member portal.</p>
          </div>
          <form onSubmit={submit} className="auth-form">
            <div className="field">
              <Label className="field-label" htmlFor="email">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="username"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <div className="field-label-row">
                <Label className="field-label" htmlFor="password">
                  Password
                </Label>
                <Link className="text-link" href="/forgot-password">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
              />
            </div>
            <Button className="auth-submit" variant="success" type="submit">
              Sign in <ArrowRight size={17} aria-hidden="true" />
            </Button>
            {message && <StatusMessage message={message} />}
          </form>
          <div className="auth-register-prompt">
            <span>New to the alliance?</span>
            <Link className="register-link" href="/register">
              Apply for membership <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="auth-legal">
            International Karate Alliance KyokushinRyu
          </p>
        </section>
      </div>
    </main>
  );
}
