<script lang="ts">
  interface Props {
    name: string;
    onClick: () => void;
  }

  const { name, onClick }: Props = $props();
</script>

<button
  class="cta rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700"
  onclick={onClick}
>
  {name}
</button>
