import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GitHubRepository } from 'hooks/useGitHubApi/github-api.types';
import { buildGitHubUrl } from 'hooks/useGitHubApi/github-api.utils';

type UseGitHubApiReturn = UseQueryResult<GitHubRepository, Error>;

/**
 * Fetch data from GitHub
 *
 * @param uri for the GitHub source
 * @return {@link UseGitHubApiReturn}
 */
export const useGitHubApi = (uri: string): UseGitHubApiReturn => {
  return useQuery<GitHubRepository, Error>({
    queryKey: [uri],
    queryFn: () => fetch(buildGitHubUrl(uri)).then((response) => response.json()),
    staleTime: 5 * 60 * 1000,
  });
};
