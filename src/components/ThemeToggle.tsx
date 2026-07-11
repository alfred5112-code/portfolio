import { FiMoon, FiSun } from 'react-icons/fi';
interface Props { theme: 'light' | 'dark'; onToggle: () => void }
export function ThemeToggle({ theme, onToggle }: Props) { return <button onClick={onToggle} className="icon-button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>; }
