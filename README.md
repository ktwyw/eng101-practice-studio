# ENG 101 Practice Studio

A static Python practice companion for Programming for Engineers, Fall 2026.

Instructor: Prof. Yanwei Wang

## Open the website

- **Main site (the link shared with students):** <https://eng101-practice-studio.eager-melon-2769.chatgpt.site>
- **GitHub Pages copy:** <https://ktwyw.github.io/eng101-practice-studio/>

Both addresses serve the same website. Practice progress is saved separately for each address.

## Publish on GitHub Pages

This export includes the complete website, weekly course downloads, content tools, verification scripts and a GitHub Pages deployment workflow. Upload the contents of this folder to the repository root, keeping `dist/`, `tools/`, `tests/` and `.github/` together. In repository **Settings → Pages**, select **GitHub Actions** as the source. The workflow publishes `dist/` after a push to `main`.

See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for complete setup and update instructions.

### Preview on your own computer

The simplest preview is to open `dist/index.html` in a web browser; the site works directly from the file.

To preview through a local web server instead, open a terminal in this folder and run the command for your system:

| System | Command |
| --- | --- |
| Windows | `py -m http.server 8000 --directory dist` |
| macOS / Linux | `python3 -m http.server 8000 --directory dist` |

Then open <http://localhost:8000/> in a browser on the same computer, and keep the terminal open while browsing (Ctrl+C stops the server). This `localhost` address works only on your own computer while the server is running; it is not a link to the published site. In VS Code, the Live Server extension (right-click `dist/index.html` → **Open with Live Server**) works too. No install or build step is needed.

## Latest update

This export matches published version 14. The Reading examples page now has an “About these examples” description and a separate “References and useful resources” section listing the two books and official learning/documentation links.

## Current collection

| Collection | Activities |
| --- | ---: |
| Weeks 1–6 MCQs: six sets of 100 | 600 |
| Weeks 7–14 MCQs: eight sets of 50 | 400 |
| Code lab: guided missing-line exercises | 100 |
| Debugging lab: complete-program repairs | 100 |
| Course program studies | 200 |
| Reading examples: 320 Wang and 80 Guttag companions | 400 |
| **Distinct practice activities** | **1800** |

The full program library combines the 200 course studies with the same 400 reading examples, for 600 programs in total. The 400 reading examples count once toward the total. The reading collection also has 35 reference plots. Course materials provides 28 original weekly PDFs and 14 two-file weekly bundles; these resources are separate from practice attempts.

Course assessment is displayed in the requested order: Assignments 10%, Lab tasks 20%, Midterm 30%, Final exam 40%. Activities in the studio are formative practice, separate from course grades and Moodle submissions.

## Structure and use

- `#home`: collection overview and starting points.
- `#banks`: Practice sets hub, with `#banks/weeks-1-6` and `#banks/weeks-7-14`. Each semester half has weekly rounds, ten-question samples, a balanced 24-question mixed round, missed-question review, filters, search and pagination. The legacy `#first-half` and `#second-half` routes still work.
- `#practice`: foundation questions by topic; the earlier Mock A–D sets are also available on the foundation collection page.
- `#code`: 100 guided exercises, with topic/week/level/progress filters, search, saved drafts, continue/random actions, worked programs, verified outputs and a 100-program ZIP.
- `#debugging`: 100 repairs, with source/category/progress filters, search, saved drafts, faulty-program observations, hints, repairs and regression checks.
- `#materials`: lecture slides and detailed reading notes for Weeks 1–14, as individual PDFs and weekly ZIPs. Week 14 uses the comprehensive course review as the slide document.
- `#readings`: 400 complete reading examples with references, explanations, modification prompts, requirements, figures and downloads.
- `#programs`: the course collection of 200 studies by default, with week/source/topic/progress filters, search and 24-card pagination. `#programs/course` resets to the 200-study course view; `#programs/all` opens all 600 programs, including the same 400 reading examples. A 200-program ZIP includes reference outputs and an explanatory catalog.
- `#session`: progress across all activity types, first-submission accuracy and missed-activity review.
- `#guide`: assessment weights, the complete scope, study routine and explanation of the practice tools.

The browser compares MCQ choices, guided code tokens/indentation, and predicted output with verified references. It does not execute Python or recognize every equivalent solution. Students can copy/download programs and run the supplied checks locally. Python 3.10 or later is assumed; relevant reading programs declare NumPy, Pandas, Matplotlib or SciPy requirements.

Progress uses `sessionStorage` under `eng101-studio-v1`. It survives refresh in the current tab and is not submitted to Moodle or synced across devices. First-submission correctness remains unchanged by retries; latest correctness controls missed-activity review. Revealing a solution alone does not mark an activity solved. Valid earlier records and drafts retain their identifiers; loading ignores damaged entries and refreshes stale display metadata. If storage is blocked, the page remains usable with in-memory progress.

The layout includes keyboard focus styles, a route-preserving skip-to-content action, accessible assessment/scope tables, filter selection states and result announcements, a labeled reset dialog and a JavaScript-disabled explanation. Mobile navigation scrolls horizontally.

## Content provenance

The foundation collection retains the original 32 Studio MCQs and 310 earlier Mock A–D questions, adding 258 original MCQs to reach 600. The second half contains 400 original questions aligned to the supplied weekly lecture-note sequence: testing/debugging; OOP; information hiding/inheritance; efficiency I/II; searching/sorting; language comparisons; integrated review. The 402 authored Python-output questions have executable reference checks; the other 256 authored questions are conceptual. All questions have four choices and explanations.

The course program collection retains the 62 Mock A–D programs and ten Week 6 teaching examples and adds 128 original studies across Weeks 1–14. Every addition has a verified output, explanation and modification prompt; selected regression assertions are supplied. All 200 course programs use the standard library. Earlier objects and IDs are unchanged. The Code lab retains its earlier 22 exercise IDs and adds 78 original exercises. The Debugging lab contains 40 adaptations from the course debugging guide, twelve Week 7 activities, eight Week 8 extensions and 40 original exercises. The reconstructed Week 7 activity and Week 8 extensions are labeled.

The Wang reading collection contains 272 runnable adaptations from the sixteen chapter sources and 48 original chapter companions. The 80 Guttag-aligned companions are newly written programs linked to concepts in the second edition of *Introduction to Computation and Programming Using Python: With Application to Understanding Data*. They are not reproductions of the book's code. Origins, teaching additions, seeded examples and optional extensions are identified. Data fixtures are embedded where needed. Classroom engineering models and thresholds are illustrative.

Only the whitelisted weekly slides and reading notes from the uploaded Moodle archive are published. Their PDF bytes and original document branding are unchanged. Raw assessment papers, instructor keys, student records, private source maps and assessment-overlap questions are excluded. The requested affiliation is absent from website text, displayed code comments, reference plots and downloadable Python programs.

## Verification

Run checks from the repository root:

| Command | What it verifies |
| --- | --- |
| `node tests/session-check.cjs` | All 1800 activity paths; routes, return links, filters, search, pagination, random/mixed rounds, answer locking, retries, drafts, reveal behavior, progress, recovery, reset, assessment order and attribution. Uses a minimal DOM adapter. |
| `python3 tests/verify-program-studies.py` | All 200 course reference programs and all 200 actual downloadable files, regression assertions, 128 unique additions, weekly coverage, catalog/outputs and retention of the earlier 72 objects. |
| `python3 tests/verify-python.py` | The earlier 41 guided answer variants and all 72 course-program outputs against independent expectations. |
| `python3 tests/verify-foundations.py` | 600 foundation questions, 100/week, unique additions, choice balance and all 202 new output answers. |
| `python3 tests/verify-second-half.py` | 400 unique questions, 50/week, balanced answer positions and all 200 output answers. |
| `python3 tests/verify-code-lab.py` | All 120 accepted line variants, regression assertions and all 100 downloadable worked programs. |
| `python3 tests/verify-debugging.py` | Every repair and regression check, plus reproduction of every faulty version's recorded failure or wrong output. Deliberately unbounded cases have a trace limit. |
| `python3 tests/verify-readings.py` | All 400 reading outputs, embedded assertions and 35 generated figures, in temporary working directories with fixed seeds and headless plotting. |
| `python3 tests/verify-materials.py` | All 28 PDF page counts, byte sizes, SHA-256 hashes and all 14 two-document bundles. |
| `python3 tests/verify-release.py` | Exact script order, JavaScript syntax, published asset whitelist, attribution, Python 3.10 syntax, declared packages and code/download bundle agreement. |

The final content review checked the earlier MCQ prompts, selected answers, modifications and explanations, as well as the authored conceptual questions. Seven conceptual prompts were clarified for terminology, valid input assumptions, `finally`, coverage and cost models. Their IDs and correct answer positions remain intact. Small-text contrast was strengthened, and stale/damaged session recovery was added without changing valid first-attempt data.

Automated interaction checks use a minimal DOM adapter rather than a real browser. Browser and mobile visual QA remains unverified. Existing reference figures were visually inspected during their creation.

## Implementation and maintenance

The site has no build step or runtime third-party JavaScript dependencies. `dist/index.html` loads the ordered data banks, collection UIs and `app.js`; styling is in `dist/styles.css`. Hash routes and relative asset links support a GitHub Pages project URL. Only `dist/` is deployed; maintenance tools and tests remain in the repository.

`dist/` contains the complete editable website source, including the existing content banks. `tools/` contains additional content-authoring and packaging scripts. Those scripts retain earlier content from the supplied banks; they are maintenance tools, not a required site build. `prepare-course-materials.py` optionally accepts the instructor's original Moodle ZIP as a command-line argument and extracts only the weekly-document whitelist. That original archive is not part of this export, and all published weekly PDFs are already included.

To run all maintenance checks, use Python 3.10 or later and Node.js, then install the optional Python packages with `python3 -m pip install -r requirements-dev.txt`. This export was checked using Python 3.12 and Node.js 24. The browser itself requires none of those Python packages.

The exported website files match the checked source revision recorded in `SOURCE_VERSION.txt`. `SHA256SUMS` records the exported file hashes; regenerate it after editing if a current manifest is needed. Repository history, local caches, credentials and the original hosting-account configuration are not included.
