<script lang="ts">
  import type Quote from '$lib/model/quote';
  import { getContext } from 'svelte';
  import classNames from 'classnames';

  interface Props {
    quote: Quote;
  }

  const { quote }: Props = $props();
  const isLoading = getContext<() => boolean>('isLoading');

  const classes = classNames('text-center', {
    hidden: isLoading(),
  });
</script>

<div class={classes}>
  <p>{quote.text}</p>
  <p>{quote.author}</p>
</div>
