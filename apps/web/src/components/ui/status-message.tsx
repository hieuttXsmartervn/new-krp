type StatusMessageProps = {
  message: string;
  kind?: 'error' | 'success';
};

export function StatusMessage({
  message,
  kind = 'success',
}: StatusMessageProps) {
  return (
    <p
      className={`alert ${kind === 'error' ? 'alert-error' : 'alert-success'}`}
      role={kind === 'error' ? 'alert' : 'status'}
      aria-live={kind === 'error' ? 'assertive' : 'polite'}
    >
      {message}
    </p>
  );
}
