export async function get({params}) {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return {
    status: 200,
    body: pokeman
  }
}
