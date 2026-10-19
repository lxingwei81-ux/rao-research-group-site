import { spawnSync } from 'node:child_process';

const env = {
  ...process.env,
  GITHUB_ACTIONS: 'true',
  GITHUB_REPOSITORY: 'lxingwei81-ux/rao-research-group-site',
  GITHUB_REPOSITORY_OWNER: 'lxingwei81-ux'
};

for (const args of [['scripts/validate-content.mjs'], ['node_modules/astro/astro.js', 'build']]) {
  const result = spawnSync(process.execPath, args, { stdio: 'inherit', env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
