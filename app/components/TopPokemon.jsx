import { BASE_URI, beautify } from '@/utils/helpers';
import Image from 'next/image';

// Server component API call loads data on page load
async function fetchPokemonList() {
  const totalPokemonCount = 1292;
  const offset = Math.floor(Math.random() * totalPokemonCount) + 1;

  const limit = 10;

  try {
    const response = await fetch(`${BASE_URI}/pokemon?offset=${offset}&limit=${limit}`, {
      next: {
        revalidate: 60,
      },
    });
  } catch (err) {
    console.error(err);
  }

  return await response.json();
}

async function fetchPokemonData(pokemonList) {
  const promise = pokemonList?.map(async (pokemon) => {
    const response = await fetch(
      pokemon.url,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const data = await response.json();

    return data;
  });

  return await response.json();
}

const TopPokemon = () => {
  return (
    <>
      <h1 className='font-bangers text-center'>Top Pokémon</h1>
    </>
  )
}

export default TopPokemon