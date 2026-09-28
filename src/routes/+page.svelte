<script lang="ts">
  import QuoteBox from '$lib/component/quote/quote-box.svelte';
  import Cta from '$lib/component/button/cta.svelte';
  import ButtonsWrapper from '$lib/component/wrapper/buttons-wrapper.svelte';
  import getRandomQuote from '$lib/utility/getRandomQuote';
  import Spinner from '$lib/component/spinner/spinner.svelte';
  import { setContext } from 'svelte';
  import type Quote from '$lib/model/quote';

  let isLoading = $state(false);
  let randomQuote: Quote = $state(getRandomQuote());

  function handleButtonClick() {
    randomQuote = getRandomQuote();
    isLoading = true;
  }

  setContext('isLoading', () => isLoading);
</script>

<Spinner align="center" />
<QuoteBox quote={randomQuote} />
<ButtonsWrapper>
  <Cta name="Another one?" onClick={handleButtonClick} />
</ButtonsWrapper>
