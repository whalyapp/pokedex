import React from 'react';
import { PokemonData } from '../interfaces/pokemon';

interface PokemonInfoProps {
  data: PokemonData;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ data }) => {
  const {
    base_happiness,
    capture_rate,
    flavor_text_entries,
    genera,
    generation,
    habitat,
    is_baby,
    is_legendary,
    is_mythical,
    names,
    evolution_chain
  } = data;

  return (
    <div className="bg-slate-900 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          {names[0].name}
        </h2>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Stats de base</h3>
          <ul className="mt-2 space-y-1">
            <li><strong>Bonheur de base :</strong> {base_happiness}</li>
            <li><strong>Taux de capture :</strong> {capture_rate}</li>
            <li><strong>Habitat :</strong> {habitat.name}</li>
            <li><strong>Generation :</strong> {generation.name}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Characterisques</h3>
          <ul className="mt-2 space-y-1">
            <li><strong>Est un bébé:</strong> <span className={`font-bold ${is_baby ? 'text-green-600' : 'text-red-600'}`}>{is_baby ? 'Oui' : 'Non'}</span></li>
            <li><strong>Est légendaire:</strong> <span className={`font-bold ${is_legendary ? 'text-yellow-600' : 'text-red-600'}`}>{is_legendary ? 'Oui' : 'Non'}</span></li>
            <li><strong>Est mythique:</strong> <span className={`font-bold ${is_mythical ? 'text-purple-600' : 'text-red-600'}`}>{is_mythical ? 'Oui' : 'Non'}</span></li>
          </ul>
        </div>
      </div>

      {/* Flavor Text */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Description</h3>
        {flavor_text_entries
          .filter((entry) => entry.language.name === 'fr')
          .map((entry, index) => (
            <p key={index}>
              {entry.flavor_text}
            </p>
          ))}
      </div>

      {/* Genus */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Type</h3>
        <p className="">{genera[0].genus}</p>
      </div>

      {/* Evolution Chain */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Chaine d'évolution</h3>
        <p>TODO: Ajouter toutes les évolutions successives du pokémon en utilisant: <i>{evolution_chain.url}</i></p>
      </div>
    </div>
  );
};

export default PokemonInfo;