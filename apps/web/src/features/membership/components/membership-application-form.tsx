'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { Brand } from '@/components/brand/brand';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { StatusMessage } from '@/components/ui/status-message';
import {
  CommunicationSection,
  KarateExperienceSection,
  PersonalInformationSection,
  PrivacyPolicy,
  type UpdateMembershipField,
} from './application-sections';
import { ProfilePhotoField } from './profile-photo-field';
import { initialMembershipApplication } from '../types';

export function MembershipApplicationForm() {
  const [form, setForm] = useState(initialMembershipApplication);
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoRotation, setPhotoRotation] = useState(0);
  const [pendingPhoto, setPendingPhoto] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [language, setLanguage] = useState('English');
  const [message, setMessage] = useState('');
  const [messageKind, setMessageKind] = useState<'error' | 'success'>(
    'success',
  );

  const update: UpdateMembershipField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const cancelPhoto = useCallback(() => setPendingPhoto(null), []);

  function choosePhoto(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setMessageKind('error');
      setMessage('Please select a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        setMessageKind('error');
        setMessage(
          'The selected image could not be read. Please choose another file.',
        );
        return;
      }

      setPendingPhoto(reader.result);
      setRotation(0);
      setMessage('');
    };
    reader.onerror = () => {
      setMessageKind('error');
      setMessage(
        'The selected image could not be read. Please choose another file.',
      );
    };
    reader.readAsDataURL(file);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreed) {
      setMessageKind('error');
      setMessage('Please accept the privacy policy before submitting.');
      return;
    }

    setMessageKind('success');
    setMessage(
      'Registration form validated. Submission will be connected to the backend in a later phase.',
    );
  }

  return (
    <main className="auth-shell register-shell">
      <header className="page-top">
        <Brand />
      </header>
      <div className="register-wrap">
        <div className="register-head">
          <h1 className="register-title">Membership Application</h1>
          <div className="register-utilities">
            <label className="visually-hidden" htmlFor="language">
              Select language
            </label>
            <Select
              id="language"
              className="language-select"
              wrapperClassName="language-select-wrapper"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option>English</option>
              <option>Vietnamese</option>
              <option>Japanese</option>
            </Select>
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="register-grid">
            <ProfilePhotoField
              photo={photo}
              photoRotation={photoRotation}
              pendingPhoto={pendingPhoto}
              rotation={rotation}
              onSelect={choosePhoto}
              onCancel={cancelPhoto}
              onRotate={(degrees) =>
                setRotation((current) =>
                  degrees === 0 ? 0 : current + degrees,
                )
              }
              onApply={() => {
                setPhoto(pendingPhoto);
                setPhotoRotation(rotation);
                setPendingPhoto(null);
              }}
            />
            <div className="form-sections-grid">
              <PersonalInformationSection form={form} update={update} />
              <CommunicationSection form={form} update={update} />
              <KarateExperienceSection form={form} update={update} />
            </div>
          </div>
          <PrivacyPolicy agreed={agreed} onChange={setAgreed} />
          {message && <StatusMessage message={message} kind={messageKind} />}
          <div className="submit-row">
            <Link href="/login" className="text-link">
              BACK TO SIGN IN
            </Link>
            <footer className="form-footer">
              © 2026 - International Karate Alliance KyokushinRyu. All Rights
              Reserved.
            </footer>
            <Button type="submit">SUBMIT APPLICATION</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
