import type { Repository } from '../types';
/** Fetches public repositories; GitHub has no public pinned-repository endpoint. */
export async function getFeaturedRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) throw new Error('GitHub is unavailable right now.');
  return (await response.json() as Repository[]).filter((repo) => !repo.fork).slice(0, 6);
}
