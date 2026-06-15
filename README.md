# myPATH Usability-Test Prototype

A small, static prototype that mimics 5 myPATH screens for moderated (Zoom) usability
testing. No backend, no build step, no internet required.

## How to run (moderators)

Just **double-click `index.html`** — it opens in your default browser and the
Next/Previous buttons move between screens.

That's it. Everything runs locally from this folder; nothing is read or written
outside it.

> If your browser blocks something when opened directly, you can instead serve the
> folder locally:
> ```
> cd pa-proto
> python3 -m http.server 8123
> ```
> then open <http://localhost:8123> in your browser.

## The screens (in order)

1. `index.html` — **Introduction** ("Before we begin, you should know…")
2. `2-getting-started.html` — **Getting Started**
3. `3-contact-information.html` — **Contact Information** (pre-filled with fake data)
4. `4-income-sources.html` — **Income Sources**
5. `5-questions.html` — **Questions** ("A few more questions…")

## How it behaves

- Users click controls (Yes/No buttons, segmented options, dropdowns) and navigate
  with **Next** / **Previous**.
- **Next stays disabled until every required field (red asterisk) on the page is
  answered**, then turns navy/blue.
- Text fields are pre-filled with fake data (users aren't expected to type).
- **Cancel** and **Save Draft** are intentionally non-functional.
- There is no branching — every user sees the same screens regardless of input.
- Answers are not persisted: reloading or going back then forward starts that page
  fresh.

## Files

```
index.html, 2-…, 3-…, 4-…, 5-…   the five screens
css/styles.css                    shared myPATH styling
js/app.js                         shared behavior (toggles, validation, navigation)
spec/                             original spec + reference screenshots
.claude/launch.json               local preview-server config (optional)
```
