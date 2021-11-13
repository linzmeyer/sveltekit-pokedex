<!-- SSR using context module -->
<!-- fetch the pokemon BEFORE the user sees the page -->
<script context="module">
	export async function load({ page }) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
      return {
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }
    });
    return {props: {pokemon: loadedPokemon}}
	}
</script>

<script>
  export let pokemon;
  import PokemanCard from "../components/pokemanCard.svelte";

  let searchTerm = "";
  let filteredPokemon = [];

  // this Reactive Value function will run every time searchTerm changes
  // perfect for replacing onChange inputs, same thing as React's useEffect
  $: {
    if (searchTerm) {
      filteredPokemon = pokemon.filter(pk => pk.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filteredPokemon = [...pokemon]
    }
  }
</script>

<svelte:head>
  <title>SvelteKit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<input type="text" placeholder="Search Pokemon" class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} >

<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
  <!-- This updates if the store changes! -->
  {#each filteredPokemon as pokeman (pokeman.id)}
    <PokemanCard {pokeman} />
  {/each}
</div>
