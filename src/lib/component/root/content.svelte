<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<main class="flex justify-center items-center w-screen h-screen p-4 py-14">
  <div class="flex flex-col gap-4">
    {@render children()}
  </div>
</main>
