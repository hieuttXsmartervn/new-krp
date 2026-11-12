import Image from 'next/image';

export function Brand({
  variant = 'default',
}: {
  variant?: 'default' | 'light';
}) {
  return (
    <div className={`brand${variant === 'light' ? ' brand--light' : ''}`}>
      <Image
        className="brand-mark"
        src="/ikak-official-logo.png"
        alt="International Karate Alliance emblem"
        width={160}
        height={160}
        sizes="80px"
        priority
      />
      <div className="brand-copy">
        <strong>INTERNATIONAL KARATE ALLIANCE</strong>
        <span className="brand-chinese">国际空手道連盟　極真流</span>
      </div>
    </div>
  );
}
