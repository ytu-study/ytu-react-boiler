import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  results: Pokemon[];
};

const PokemonCard = ({ name, url }: { name: string; url: string }) => {
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPhotoUrl(res.data.sprites.front_default);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div>
      <img src={photoUrl} alt={`${name}-front-default`} />
      <h3>{name}</h3>
    </div>
  );
};

const mainUrl = 'https://pokeapi.co/api/v2/pokemon/';

export default function PokemonList(): JSX.Element {
  const [data, setData] = useState<PokemonResponse>();
  const [error, setError] = useState<string>('');

  const handleClick = () => {
    axios
      .get(mainUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(`Something Wrong: ${error}`);
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>포켓몬 정보 조회하기</button>
      {data && (
        <div>
          {data.results.map((pokemon: Pokemon) => {
            return <PokemonCard key={`${pokemon.name}-${pokemon.url}`} name={pokemon.name} url={pokemon.url} />;
          })}
        </div>
      )}
    </div>
  );
}
