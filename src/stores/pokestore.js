import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async (num) => {

}



export const getPokemonById = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
