import React, { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Style/HomePage.css";

const HomePage = () => {
  const inputName = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.current.value.trim();
    dispatch(setTrainerName(name));
    if (name.length > 2) {
      navigate("/pokedex");
    }
  };
  return (
    <div className="homepage">
      <div className="homepage__header">
        <img className="home__logo" src="../../images/logo.png" alt="logo" />
        <h2 className="home__title">¡Hi Trainer, is your turn!</h2>
        <p className="homepage__p">
          To start, please give me your name
        </p>
        <form className="home__form" onSubmit={handleSubmit}>
          <input className="input__form--home" ref={inputName} type="text" placeholder="Insert your name" />
          <button className="btn__form--home">Start</button>
        </form>
      </div>
      <div className="homepage__footer">
        <section className="section_red"></section>
        <section className="circle">
          <section className="circle__center"></section>
        </section>
        <section className="section_black"></section>
      </div>
    </div>
  );
};

export default HomePage;
