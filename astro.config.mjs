import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName && repositoryOwner;
const isRootPagesRepository =
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const previewSite = isGitHubPagesBuild
  ? `https://${repositoryOwner}.github.io`
  : 'http://localhost:4321';

export default defineConfig({
  site: process.env.SITE_URL || previewSite,
  base:
    process.env.BASE_PATH ||
    (isGitHubPagesBuild && !isRootPagesRepository ? `/${repositoryName}/` : '/'),
  output: 'static',
  build: {
    format: 'directory'
  }
});
