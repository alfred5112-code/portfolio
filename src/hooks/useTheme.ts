import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark';
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('theme', theme); }, [theme]);
  return { theme, toggleTheme: () => setTheme((value) => value === 'dark' ? 'light' : 'dark') };
}
