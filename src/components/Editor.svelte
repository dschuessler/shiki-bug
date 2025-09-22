<script lang="ts">
  import { createHighlighter } from "shiki";
  import { onMount } from "svelte";

  onMount(async () => {
    const [highlighter, monaco, { shikiToMonaco }] = await Promise.all([
      createHighlighter({
        themes: ["github-light"],
        langs: ["html"],
      }),
      import("monaco-editor/esm/vs/editor/editor.api"),
      import("@shikijs/monaco"),
    ]);

    monaco.languages.register({ id: "html" });

    shikiToMonaco(highlighter, monaco);

    const container = document.querySelector("div")!;

    monaco.editor.create(container, {
      language: "html",
      theme: "github-light",
      value: `<html lang="en"></html>`,
    });
  });
</script>

<div></div>

<style>
  div {
    width: 600px;
    height: 300px;
  }
</style>
