const BASE_URL = 'https://api.github.com';

/**
 * @param uri for the GitHub source
 * @return the complete GitHub url
 */
export const buildGitHubUrl = (uri: string) => {
  return `${BASE_URL}${uri.startsWith('/') ? '' : '/'}${uri}`;
};
