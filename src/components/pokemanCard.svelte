<script>
  // export let _var_ means it's expecting to recieve a prop
  export let pokeman;
  import { identity } from "svelte/internal";
  import {fade} from 'svelte/transition';
</script>


<a transition:fade class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`} >
  <img class="h-40" src={pokeman.image} alt={pokeman.name} >
  <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>
