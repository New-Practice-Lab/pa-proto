# myPATH Prototype for Usability Testing

A small, static prototype that mimics 5 myPATH screens for moderated (Zoom)
usability testing. No backend, build step, or internet is required.

## How to run (moderators)

To open the prototype in your default browser

1. Download the latest copy of prototype:
   **[pa_proto.zip](https://github.com/New-Practice-Lab/pa_proto/releases/latest/download/pa_proto.zip)**.
2. Unzip the download.
3. Navigate to the `pa_proto` folder and open `index.html`.

Everything runs locally from this folder; nothing is read or written outside it.

> If your browser blocks something when opened directly, you can instead serve the
> folder locally.
>
> **Prerequisite**: [`uv` is installed on your machine](https://docs.astral.sh/uv/getting-started/installation/)
> ```
> cd pa_proto
> uv run python -m http.server 8123
> ```
> Then open <http://localhost:8123> in your browser.

## The screens (in order)

1. `index.html` — **Introduction** ("Before we begin, you should know…")
2. `2-getting-started.html` — **Getting Started**
3. `3-contact-information.html` — **Contact Information** (pre-filled with fake data)
4. `4-income-sources.html` — **Income Sources**
5. `5-questions.html` — **Questions** ("A few more questions…")
