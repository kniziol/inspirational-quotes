<script lang="ts">
  import { getContext } from 'svelte';
  import classNames from 'classnames';

  interface Props {
    align?: 'left' | 'center' | 'right';
  }

  const { align = 'center' }: Props = $props();
  const isLoading = getContext<() => boolean>('isLoading');

  const justifyValue = $derived.by(() => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
    }
  });

  const classes = classNames('flex', {
    hidden: !isLoading(),
  });
</script>

<div class={classes} style="justify-content: {justifyValue}">
  <div
    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span
      class="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!"
    >
    </span>
  </div>
</div>
