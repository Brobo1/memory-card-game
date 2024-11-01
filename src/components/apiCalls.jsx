export async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
}
