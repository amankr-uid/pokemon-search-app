import PokemonCard from "./PokemonCard";

const PokemonList = ({ results }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {results.length > 0 ? (
        results.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} image={pokemon.sprites?.front_default} />
        ))
      ) : (
        <p className="text-red-500">No result found</p>
      )}
    </div>
  );
};

export default PokemonList;
