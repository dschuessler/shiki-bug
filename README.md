# Shiki bug reproduction

## Steps to reproduce

1. Run `npm install && npm run build && npm run preview`
2. Visit `localhost:8787`

Expected behavior: No console error and the monaco editor is rendered.

Actual behavior: The following console error appears and no monaco editor is rendered.

```
Uncaught (in promise) ShikiError: Theme `github-light` is not included in this bundle. You may want to load it from external source.
    at l (Editor.Cis-NyJD.js:13:10312)
    at Editor.Cis-NyJD.js:13:10462
    at Array.map (<anonymous>)
    at i (Editor.Cis-NyJD.js:13:10455)
    at Editor.Cis-NyJD.js:13:38958
    at en (template.D25tWoEu.js:1:351)
    at Array.map (<anonymous>)
    at Editor.Cis-NyJD.js:2:1859
    at En (template.D25tWoEu.js:1:14277)
    at Editor.Cis-NyJD.js:2:1848
```

## Additional notes

It works though if you:

1. uncomment line 11 in `astro.config.mjs`
2. or use the Astro dev server via `npm run dev`. The address is `localhost:4321`.