# Rao Research Group website

An Astro static website for Prof. Zhoulyu Rao's research group in the Department of Chemistry, City University of Hong Kong. Content is held in Markdown and YAML so it can be edited through [Pages CMS](https://app.pagescms.org/) without modifying components.

## Local development

Install a current Node.js LTS release, then run:

```bash
pnpm install
pnpm dev
```

Use `pnpm build` to create the production site in `dist/`, or `npm run build` when using npm. The GitHub Action uses pnpm with the committed lockfile.

## Deployment to GitHub Pages

1. Create or use the GitHub repository that will own this source and push the `main` branch.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys each push to `main`.
4. For a demo, leave **Custom domain** empty. GitHub will publish to the default Pages URL, usually `https://ACCOUNT.github.io/REPOSITORY/` or `https://ACCOUNT.github.io/` for an `ACCOUNT.github.io` repository.

The demo version intentionally does not include `public/CNAME`, so it will not bind `zhoulyu.com`.

### Restoring `zhoulyu.com`

The DNS zone currently resolves to GitHub Pages addresses, but GitHub returns a 404 because no active GitHub Pages deployment is attached to this custom domain. After the demo is approved, add a `public/CNAME` file containing `zhoulyu.com`, configure the repository's Pages source as above, bind the custom domain in the repository's Pages settings, and enable HTTPS after GitHub validates it. Do not rely on the `CNAME` file alone.

For a user site, the usual DNS configuration is:

- apex `zhoulyu.com`: GitHub Pages A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`;
- `www`: a CNAME to the GitHub account's `ACCOUNT.github.io` hostname.

Keep the GitHub Pages custom-domain setting and DNS records under the same organization's control. If the repository is not the account's `ACCOUNT.github.io` repository, the GitHub Pages Action workflow still works; only the `www` DNS target needs to reflect the account that owns the Pages site.

## Editing content through Pages CMS

1. Sign in at [Pages CMS](https://app.pagescms.org/) using the GitHub account with access to the repository.
2. Install the Pages CMS GitHub App for the repository if prompted.
3. Open the repository. Pages CMS reads `.pages.yml` and provides forms for all editable content.
4. Save an edit. Pages CMS commits it to GitHub, then the Pages workflow publishes the updated site.

The main editable locations are:

| Website content | Source |
| --- | --- |
| Homepage name, tagline, description, contact details and approved logo | `src/data/site.yml` |
| Research themes | `src/content/research/*.md` |
| Publications | `src/data/publications.yml` |
| People | `src/content/people/*.md` |
| News | `src/content/news/*.md` |
| Positions | `src/data/positions.yml` |
| Uploaded images | `public/uploads/` |

Only records with `published: true` appear on the public website. Empty categories and unpublished research themes are hidden automatically.

## Add a publication

In Pages CMS, open **Publications** and add an entry with a unique, URL-safe `id`, the title, authors, journal and year. Add a DOI or publisher URL when it is available; the publication card will show its external link automatically. Set **featured** to show it in the selected-publications area and add a research area for filtering.

## Add a member

In Pages CMS, open **People**, create a Markdown entry, complete name, role and group, then set **published** to true. Add a photo only after its use has been approved. The site hides member categories without any published profiles.

## Publish news

In **News**, create a new item with date, title and summary. Set **published** to true to display it. The three newest published items appear on the homepage.

## Replace images and the CityUHK logo

Upload approved research images through Pages CMS. Use their `/uploads/...` path in the relevant image field. The three files in `public/images/research/` are temporary images migrated from the prior site.

The header does not embed an unofficial CityUHK logo. After receiving an approved asset from CityUHK's brand materials, upload it and set `official_logo` in **Site settings**. The header will then render it and link to the CityUHK homepage.

The style token `#981B49` is drawn from the university's publicly served CMYK logo asset. Before formal launch, verify all logo use, typography and colour treatment against the current CityUHK Corporate Identity Manual and the Department's sub-site requirements.

## Legacy material

The previous personal website's four HTML files are in `legacy/` for reference. They are not used by the Astro site. Its duplicated CSS, fixed A4 widths and hard-coded navigation are intentionally not carried forward.
