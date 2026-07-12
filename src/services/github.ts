import type { Repository } from '../types';
import repositories from '../data/repositories.json';

/** Returns the repository links curated in src/data/repositories.json. */
export async function getFeaturedRepositories(username: string): Promise<Repository[]> {
  void username;
  return repositories.map((repo, index) => ({
    ...repo,
    id: index,
    html_url: repo.url,
    stargazers_count: 0,
    fork: false,
  }));
}
