# Tooling Research Committee — website

Website for the [Tooling Research Committee](https://www.trustandsafetyfoundation.org/tooling-research-committee), a working group of the [Trust & Safety Foundation](https://www.trustandsafetyfoundation.org).

Built with [Astro](https://astro.build/). Deployed to GitHub Pages on every push to `main`.

## Develop

```sh
npm install
npm run dev      # local dev at http://localhost:4321/website
npm run check    # typecheck Astro + TS
npm run build    # static output to dist/
npm run preview  # serve the built site locally
```

## Where things live

| Path                       | Purpose                                          |
| -------------------------- | ------------------------------------------------ |
| `src/pages/`               | Routes (index, about, workstreams/\*)            |
| `src/components/`          | Astro components (Header, Footer, cards, hero)   |
| `src/layouts/Base.astro`   | HTML shell, `<head>`, header + footer            |
| `src/styles/tokens.css`    | Design tokens — colors, type scale, spacing      |
| `src/styles/global.css`    | Element-level styles, prose, layout primitives   |
| `src/data/site.ts`         | Site-wide constants (incl. Google Form URL)      |
| `src/data/members.ts`      | Co-chairs + member roster                        |
| `src/data/workstreams.ts`  | The three workstreams' metadata                  |
| `src/data/tools.ts`        | Seed data + schema for the Tooling Map           |

## Updating content

- **Workstream copy.** Edit the relevant page under `src/pages/workstreams/`.
- **Members.** Edit `src/data/members.ts`. The about page renders directly from this file.
- **Tooling Map entries.** Add records to the `tools` array in `src/data/tools.ts`. The browse view on the Tooling Map page renders automatically when entries are present.
- **Submission form URL.** Set `toolingMapSubmissionUrl` in `src/data/site.ts` to the live Google Form.

## Deployment

The site is configured for GitHub Pages under `tsf-trc.github.io/website`:

- `site` and `base` are set in `astro.config.mjs`
- `.github/workflows/deploy.yml` builds and publishes on push to `main`
- To point a custom domain (e.g. `tooling.trustandsafetyfoundation.org`), add a `public/CNAME` file and update `site` / `base` in `astro.config.mjs`

## License

Content published under CC BY 4.0 unless otherwise noted. Code under MIT.
