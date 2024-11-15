import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        if (!response.ok) {
          throw new Error("Fallo al cargar datos");
        }
        const data = await response.json();

        const detailedPokemonPromises = data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          return await detailsResponse.json();
        });

        const detailedPokemon = await Promise.all(detailedPokemonPromises);
        setPokemonList(detailedPokemon);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <p>Loading Pokémon...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Pokémon con imagen</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id} style={{ marginBottom: "20px" }}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
            <p><strong>Base Stats:</strong> {pokemon.stats[0].base_stat} Vida</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
