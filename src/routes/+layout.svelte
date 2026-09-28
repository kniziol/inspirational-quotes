<script lang="ts">
  import '../styles/layout.css';
  import type { Snippet } from 'svelte';
  import Content from '$lib/component/root/content.svelte';
  import Footer from '$lib/component/root/footer.svelte';
  import Header from '$lib/component/root/header.svelte';
  import { PUBLIC_APP_TITLE } from '$env/static/public';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<svelte:head>
  <title>{PUBLIC_APP_TITLE}</title>
</svelte:head>

<Header />
<Content>{@render children()}</Content>
<Footer />
