import React, { useEffect } from "react";
import useFetch from "../../hook/useFetch";
import { useNavigate } from "react-router-dom";
import "../style/PokemonsInfo.css";

const PokemonsInfo = ({ url }) => {
  const [pokemon, getpokemon] = useFetch(url);

  useEffect(() => {
    getpokemon();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon?.id}`);
  };

  return (
    <article
      className={`article__pokemonInfo ${pokemon?.types[0].type.name}__card`}
      onClick={handleNavigate}
    >
      <header
        className={`pokemon__header ${pokemon?.types[0].type.name}-gradient`}
      >
        <img
          className="img__pokemon"
          src={pokemon?.sprites.other.dream_world["front_default"]}
          alt={pokemon?.name}
        />
      </header>
      <section className="Section__name--pokemon">
        <h2 className={`name__pokemon ${pokemon?.types[0].type.name}-name`}>
          {pokemon?.name}
        </h2>
        <ul className="list__type--pokemon">
          {pokemon?.types.map((type, index) => (
            <li key={type.type.url}>
              {type.type.name}
              {index < pokemon.types.length - 1 && " /"}
            </li>
          ))}
        </ul>
      </section>
      <hr className="separator" />
      <section>
        <ul className="pokemon__stats--ul">
          {pokemon?.stats.slice(0, 4).map((infostat) => (
            <li className="pokemon__stats--li" key={infostat.stat.url}>
              <span className="stats--name">{infostat.stat.name}</span>
              <span
                className={`stats--base ${pokemon?.types[0].type.name}__stats--base`}
              >
                {infostat.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokemonsInfo;
