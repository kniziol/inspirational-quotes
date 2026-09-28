<script lang="ts">
  import '../styles/layout.css';
  import Content from '$lib/component/root/content.svelte';
  import type { Snippet } from 'svelte';
  import Footer from '$lib/component/root/footer.svelte';
  import Header from '$lib/component/root/header.svelte';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<Header />
<Content>{@render children()}</Content>
<Footer />
