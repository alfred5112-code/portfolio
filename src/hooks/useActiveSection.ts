import { useEffect, useState } from 'react';
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-35% 0px -55%' }); ids.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); }); return () => observer.disconnect(); }, [ids]);
  return active;
}
