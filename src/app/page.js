"use client";
import { useState, useEffect } from "react";
import { getPokemonList, getPokemonByType, getPokemonByAbility } from "../lib/api";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]); // Full Pokémon list
  const [filteredPokemon, setFilteredPokemon] = useState([]); // Filtered list
  const [searchType, setSearchType] = useState("name"); // "name", "type", "ability"

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonList();
      setPokemonList(data);
      setFilteredPokemon(data); // Default: Show all Pokémon
    };
    fetchPokemon();
  }, []);

  // 🔍 Handle Search Based on Type Selection
  const handleSearch = async (query) => {
    if (!query.trim() || searchType === "all") {
      setFilteredPokemon(pokemonList); // ✅ Reset to full list if "all" is selected
      return;
    }

    let results = [];
    if (searchType === "name") {
      results = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (searchType === "type") {
      results = await getPokemonByType(query);
    } else if (searchType === "ability") {
      results = await getPokemonByAbility(query);
    }

    setFilteredPokemon(results.length ? results : []); // Show results or empty message
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-gray-900 font-bold mb-4">Pokédex</h1>

      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} onTypeChange={setSearchType} searchType={searchType} />

      {/* Pokémon List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-4">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
          ))
        ) : (
          <p className="text-gray-600">No Pokémon found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
