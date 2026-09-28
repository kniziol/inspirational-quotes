import quotes from '../../data/quotes.json';
import type Quote from '$lib/model/quote';

function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];
}

export default getRandomQuote;
