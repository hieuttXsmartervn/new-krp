export default function Loading() {
  return (
    <main className="loading-page" aria-busy="true" aria-live="polite">
      <span className="loading-indicator" aria-hidden="true" />
      <p>Loading portal…</p>
    </main>
  );
}
