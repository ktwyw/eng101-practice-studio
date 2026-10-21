# Publish ENG 101 Practice Studio on GitHub

This project is ready to upload. It contains the complete static website and a GitHub Pages workflow. No npm install, build service, API key or backend is required.

## 1. Extract the ZIP

Extract `ENG101_Practice_Studio_GitHub.zip`. Open the resulting `eng101-practice-studio` folder. Its contents must be at the repository root:

| Path | Purpose |
| --- | --- |
| `dist/` | Website HTML, CSS, JavaScript, figures, weekly PDFs and all student downloads |
| `.github/workflows/deploy-pages.yml` | Publishes the contents of `dist/` to GitHub Pages |
| `tools/` | Content-authoring and download-packaging scripts |
| `tests/` | Automated interaction and content verification |
| `README.md` | Collection overview, provenance and maintenance guide |
| `requirements-dev.txt` | Optional Python packages for maintenance checks |
| `SOURCE_VERSION.txt` | Revision used for this export |
| `SHA256SUMS` | Export integrity manifest |

Keep `.github/` when copying files; enable hidden-file display if your file manager hides it. Upload the extracted files, rather than the ZIP itself. Keep `dist/` as a folder; do not move its contents to the repository root when using this workflow.

## 2. Create the GitHub repository and upload

On GitHub, create a **public** repository named `eng101-practice-studio`. Leave it empty when creating it: this package already supplies its README and ignore file.

Run these commands in a terminal from inside the extracted folder. The example remote uses your account `ktwyw`; change it if you choose another account or repository name.

```sh
git init
git add .
git commit -m "Add ENG 101 Practice Studio"
git branch -M main
git remote add origin https://github.com/ktwyw/eng101-practice-studio.git
git push -u origin main
```

Authenticate with your own GitHub account if requested. If you use a browser upload instead, retain the same folder structure and include `.github/workflows/deploy-pages.yml`.

## 3. Enable GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open the repository's **Actions** tab and select **Deploy ENG 101 Practice Studio**.
4. If an earlier run failed before Pages was enabled, rerun it, or choose **Run workflow** for the `main` branch.
5. Wait for the deployment job to succeed. Open the URL shown in the deployment output or Pages settings.

For the repository name and account above, the expected address is:

<https://ktwyw.github.io/eng101-practice-studio/>

This is the expected address after your successful deployment; the export does not itself create the repository or publish that URL. The workflow deploys only `dist/`, so the site entry point is `dist/index.html`.

## 4. Check and share

Open the deployed URL in a signed-out browser window and on a phone. Check a practice question, Program studies, one PDF and one program ZIP download. Add the working URL to Moodle using:

**ENG 101 Practice Studio — Questions, Code Labs and Weekly Materials**

Student note: “These activities are ungraded practice. Your progress is saved only in your current browser tab and is not submitted to Moodle.”

Progress on the earlier hosted site does not transfer to this GitHub Pages address.

## Preview and update

The simplest preview is to open `dist/index.html` in a browser. To use a local server instead, run this from the project root (Windows: `py`; macOS/Linux: `python3`):

```sh
py -m http.server 8000 --directory dist
python3 -m http.server 8000 --directory dist
```

Run only the line for your system, then open <http://localhost:8000/> on the same computer. Stop the server with Ctrl+C. Edit the files under `dist/`, check the changes, then commit and push to `main`; the supplied workflow publishes the updated site.

For quick verification before pushing:

```sh
node tests/session-check.cjs
python3 tests/verify-release.py
```

The README lists the more detailed content checks. Install `requirements-dev.txt` if running checks that execute scientific reading programs or inspect PDFs.

If the site returns 404, confirm that the workflow succeeded, the Pages source is GitHub Actions, and the repository root contains `.github/workflows/deploy-pages.yml` and `dist/index.html`. If you rename the default branch, update the workflow's branch filter as well.

Official references: [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), and [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
