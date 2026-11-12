'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type ProfilePhotoFieldProps = {
  photo: string | null;
  photoRotation: number;
  pendingPhoto: string | null;
  rotation: number;
  onSelect: (file: File | undefined) => void;
  onCancel: () => void;
  onApply: () => void;
  onRotate: (degrees: number) => void;
};

export function ProfilePhotoField({
  photo,
  photoRotation,
  pendingPhoto,
  rotation,
  onSelect,
  onCancel,
  onApply,
  onRotate,
}: ProfilePhotoFieldProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!pendingPhoto) {
      if (wasOpen.current) trigger.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
  }, [pendingPhoto, onCancel]);

  return (
    <Dialog
      open={Boolean(pendingPhoto)}
      onOpenChange={(open) => {
        if (!open) onCancel();
      }}
    >
      <aside className="photo-column">
        <h2 className="section-title">PHOTO</h2>
        <div className="photo-preview">
          {photo ? (
            <Image
              src={photo}
              alt="Member profile preview"
              fill
              sizes="200px"
              unoptimized
              className="object-contain"
              style={{ transform: `rotate(${photoRotation}deg)` }}
            />
          ) : (
            <div className="photo-placeholder">
              <span aria-hidden="true">＋</span>
              <br />
              Upload profile photo
            </div>
          )}
        </div>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          hidden
          onChange={(event) => {
            onSelect(event.currentTarget.files?.[0]);
            event.currentTarget.value = '';
          }}
        />
        <Button
          ref={trigger}
          variant="muted"
          type="button"
          onClick={() => fileInput.current?.click()}
        >
          {photo ? 'CHANGE IMAGE' : 'SELECT IMAGE'}
        </Button>
        <p className="muted-note">Recommended: portrait photo, JPG or PNG.</p>

        {pendingPhoto && (
          <DialogContent className="crop-modal gap-0">
            <header className="modal-head">
              <DialogTitle>Adjust &amp; Crop Photo</DialogTitle>
            </header>
            <div className="crop-stage">
              <div className="crop-frame">
                <Image
                  src={pendingPhoto}
                  alt="Photo crop preview"
                  width={512}
                  height={512}
                  unoptimized
                  className="max-h-full max-w-full object-contain"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
              </div>
            </div>
            <div className="rotate-tools" aria-label="Photo rotation controls">
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={() => onRotate(-90)}
              >
                ↶ ROTATE LEFT
              </Button>
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={() => onRotate(90)}
              >
                ↷ ROTATE RIGHT
              </Button>
              <Button
                size="sm"
                variant="outline"
                type="button"
                onClick={() => onRotate(0)}
              >
                ↻ RESET
              </Button>
            </div>
            <footer className="modal-foot">
              <Button variant="muted" type="button" onClick={onCancel}>
                CANCEL
              </Button>
              <Button variant="default" type="button" onClick={onApply}>
                APPLY PHOTO
              </Button>
            </footer>
          </DialogContent>
        )}
      </aside>
    </Dialog>
  );
}
