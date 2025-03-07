import Link from "next/link";

const PokemonCard = ({ name, image }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg text-center bg-white">
      {/* Pokémon Image */}
      <img src={null} alt={name} className="w-24 h-24 mx-auto mb-2" />

      {/* Pokémon Name */}
      <h3 className="text-xl font-semibold text-gray-950">{name}</h3>

      {/* View Details Link */}
      <Link href={`/pokemon/${name}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default PokemonCard;
