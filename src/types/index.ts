export interface NavItem { label: string; id: string }
export interface SkillGroup { group: string; items: string[] }
export interface Experience { company: string; role: string; period: string; summary: string; highlights: string[] }
export interface Agent { title: string; overview: string; problem: string; solution: string; technology: string[]; url: string }
export interface Repository { id: number; name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number; fork: boolean }
