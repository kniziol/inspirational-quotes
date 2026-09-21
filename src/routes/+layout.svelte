<script lang="ts">
  import './layout.css';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex justify-center items-center w-screen h-screen p-4">
  {@render children()}
</div>
