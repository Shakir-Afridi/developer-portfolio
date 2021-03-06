export const getGHCredentials = (
  repoUrl: string,
): { username: string; repo: string } => {
  const parts = new URL(repoUrl).pathname.split('/');
  const repo = parts.pop() || '';
  const username = parts.pop() || '';
  return { repo, username };
};
