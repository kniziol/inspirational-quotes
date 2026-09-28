<script lang="ts">
  import { getContext, type Snippet } from 'svelte';
  import classNames from 'classnames';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
  const isLoading = getContext<() => boolean>('isLoading');

  const classes = classNames('flex', 'justify-center', 'gap-4', {
    hidden: isLoading(),
  });
</script>

<div class={classes}>
  {@render children()}
</div>
