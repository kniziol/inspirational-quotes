<script lang="ts">
  import type Quote from '$lib/model/quote';
  import { getContext } from 'svelte';
  import classNames from 'classnames';

  interface Props {
    quote: Quote;
  }

  const { quote }: Props = $props();
  const isLoading = getContext<() => boolean>('isLoading');

  const classes = classNames('quote-box text-center', {
    hidden: isLoading(),
  });
</script>

<div class={classes}>
  <p class="text">{quote.text}</p>
  <p class="author">{quote.author}</p>
</div>
