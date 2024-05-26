import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hook/useFetch";
import PokemonsInfo from "../components/pokedexpage/PokemonsInfo";
import SelectPokeType from "../components/pokedexpage/SelectPokeType";
import PaginationPage from "../components/pokedexpage/PaginationPage";
import "./Style/PokedexPage.css";

const PokedexPage = () => {
  const [inputinfoPoke, setInputInfoPoke] = useState("");
  const [selectInfo, setSelectInfo] = useState("allpokemons");
  const [page, setPage] = useState(0);
  const [limitPokemon, setLimitPokemon] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const trainerName = useSelector((store) => store.trainerName);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limitPokemon}&offset=${page}`;
  const [pokemons, getPokemon, getByTypePokemon, isLoading, hasError] =
    useFetch(url);

  useEffect(() => {
    setTotalPages(Math.ceil(pokemons?.count / limitPokemon) || 1);
  }, [pokemons, limitPokemon]);

  useEffect(() => {
    if (selectInfo === "allpokemons") {
      getPokemon();
    } else {
      getByTypePokemon(selectInfo);
    }
  }, [selectInfo, page, limitPokemon]);

  const inputPoke = useRef();



  const handleSubmit = (e) => {
    e.preventDefault();
    setInputInfoPoke(inputPoke.current.value.toLowerCase().trim());
    inputPoke.current.value = "";
  };



  return (
    <div className="pokedexpage">
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
      <article className="article__info--pokedexpage">
        <section className="name__pokedexpage">
          <p className="form__pokedexpage--p">
            <span className="form__pokedexpage--span">
              Welcome{" "}
              {`${trainerName[0].toUpperCase()}${trainerName
                .slice(1)
                .toLowerCase()}`}
            </span>
            , here you can find your favorite pokemon
          </p>
        </section>
        <section className="section__form--pokedexpage">
          <form className="form--pokedexpage" onSubmit={handleSubmit}>
            <input
              className="input--pokedexpage"
              ref={inputPoke}
              type="text"
              placeholder="Search pokemon"
            />
            <button className="btn--pokedexpage">Search</button>
          </form>
          <SelectPokeType setSelectInfo={setSelectInfo} />
          
          
  


        </section>
      </article>

      <article className="article__card--pokemon">
        <section>
          <ul className="card__pokemon">
            {pokemons?.results
              .filter((poke) => poke.name.includes(inputinfoPoke))
              .map((poke) => (
                <li className="card__pokemon--li" key={poke.url}>
                  <PokemonsInfo url={poke.url} />
                </li>
              ))}
          </ul>
        </section>
      </article>
      <section className="section__pagination--pokemons">
        <PaginationPage
          setPage={setPage}
          page={page}
          totalPages={totalPages}
          limitPokemon={limitPokemon}
        />
      </section>
    </div>
  );
};

export default PokedexPage;