/**
 * @typedef {Object} Sprites
 * @property {string} front_default
 * @property {Object} other.dream_world.front_default
 */

/**
 * @typedef {Object} Pokemon
 * @property {number} id
 * @property {Sprites} sprites
 * @property {string} name
 */
/**
 * Fetches the Pokémon data from the PokeAPI.
 *
 * @param {string} name - The name of the Pokémon.
 * @returns {Promise<Pokemon>} The fetched Pokémon data.
 */
export async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
}
