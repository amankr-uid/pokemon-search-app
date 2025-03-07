import { getPokemonDetails } from "../../../lib/api";
import Breadcrumb from "../../../components/Breadcrumb";
import PokemonDetails from "../../../components/PokemonDetails";

const PokemonPage = async ({ params }) => {
  const pokemon = await getPokemonDetails(params.name);

  return (
    <div className="p-6">
      {/* Breadcrumb Component */}
      <Breadcrumb currentPage={pokemon.name} />

      {/* Pokémon Details Component */}
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
};

export default PokemonPage;
