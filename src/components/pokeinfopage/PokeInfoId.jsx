import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import "../style/PokeInfoId.css";

const PokeInfoId = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemonId, getPokemonId] = useFetch(url);

  useEffect(() => {
    getPokemonId();
  }, []);

  return (
    <div>
      <article>
        <section className="header__pokedexpage">
          <div className="pokedexpage__footer">
            <section className="section_red--pokedexpage">
              <img
                className="section__img--pokedexpage"
                src="../../images/PokedexEd.png"
                alt=""
              />
            </section>
            <section className="circle__pokedexpage">
              <section className="circle__center--pokedexpage"></section>
            </section>
            <section className="section_black--pokedexpage"></section>
          </div>
        </section>
      </article>
      <div className="pokeinfoid">
        <article className="article__pokeinfoid">
          <header
            className={`header__header--pokeinfoid ${pokemonId?.types[0].type.name}-gradient`}
          >
            <img
              className="img__header--pokeinfoid"
              src={pokemonId?.sprites.other.dream_world["front_default"]}
              alt={pokemonId?.name}
            />
          </header>
          <section className="section__name--pokeinfoid">
            <h3 className={`info__id ${pokemonId?.types[0].type.name}-name`}>
              #{pokemonId?.id}
            </h3>
            <h2 className={`info__name ${pokemonId?.types[0].type.name}-name`}>
              {pokemonId?.name}
            </h2>
          </section>
          <section className="section__info--pokeinfoid">
            <ul className="ul__info--pokeinfoid">
              <li className="li__info--pokeinfoid">
                <span className="span__info--pokeinfoid">weight</span>
                <span className="number__class">{pokemonId?.weight}</span>
              </li>
              <li className="li__info--pokeinfoid">
                <span className="span__info--pokeinfoid">height</span>
                <span className="number__class">{pokemonId?.height}</span>
              </li>
            </ul>
          </section>
          <article className="article__types--pokemon">
            <section className="section__types--pokemon">
              <h2 className="title__types">Type</h2>
              <ul className="ul__types">
                {pokemonId?.types.map((type) => (
                  <li
                    className={`li__types ${pokemonId?.types[0].type.name}`}
                    key={type.type.url}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </section>
            <section className="section__types--pokemon">
              <h2 className="title__types">Abilities</h2>
              <ul className="ul__types">
                {pokemonId?.abilities.map((ability) => (
                  <li className="li__abilitie" key={ability.ability.url}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <section className="section__stats--pokemon">
            <h2 className="title__stats--pokemon">Stats</h2>
            <ul className="ul__stats--pokemon">
              {pokemonId?.stats.slice(0, 4).map((stat) => (
                <li className="li__stats--pokemon" key={stat.stat.url}>
                  <div className="info__stats--pokemon">
                    <span className="name__stats--pokemon">
                      {stat.stat.name}
                    </span>
                    <span className="base__stats--pokemon">
                      {stat.base_stat}/150
                    </span>
                  </div>
                  <div className="bar__stats--pokemon">
                    <div
                      className="filler__stats--pokemon"
                      style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <article className="article__movement">
          <section className="section__movement">
            <h2 className="title__movement">Movements</h2>
            <ul className="ul__movement">
              {pokemonId?.moves.slice(0, 25).map((move) => (
                <li className="li__movement" key={move.move.url}>
                  {move.move.name}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PokeInfoId;
