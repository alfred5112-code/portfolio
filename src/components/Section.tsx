import type { ReactNode } from 'react';
interface Props { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }
/** Shared semantic section shell. */
export function Section({ id, eyebrow, title, children, className = '' }: Props) { return <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}><div className="mx-auto max-w-6xl px-6"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p><h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2><div className="mt-10">{children}</div></div></section>; }
