import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async () => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=50`);
  return res.data.results;
};

export const getPokemonDetails = async (name) => {
  const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return res.data;
};

export const getPokemonTypes = async () => {
  const res = await axios.get(`${BASE_URL}/type`);
  return res.data.results;
};

// Fetch Pokémon by Name
export const getPokemonByName = async (name) => {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon by name:", error);
      return null;
    }
  };
  
  // Fetch Pokémon by Type
  export const getPokemonByType = async (type) => {
    try {
      const response = await axios.get(`${BASE_URL}/type/${type.toLowerCase()}`);
      return response.data.pokemon.map((p) => p.pokemon); // Extract Pokémon list
    } catch (error) {
      console.error("Error fetching Pokémon by type:", error);
      return [];
    }
  };
  
  // Fetch Pokémon by Ability
  export const getPokemonByAbility = async (ability) => {
    try {
      const response = await axios.get(`${BASE_URL}/ability/${ability.toLowerCase()}`);
      return response.data.pokemon.map((p) => p.pokemon); // Extract Pokémon list
    } catch (error) {
      console.error("Error fetching Pokémon by ability:", error);
      return [];
    }
  };