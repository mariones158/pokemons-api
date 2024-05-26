import { useEffect, useRef } from "react";
import useFetch from "../../hook/useFetch";
import "../../components/style/SelectPokeType.css";

const SelectPokeType = ({ setSelectInfo }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [type, getType] = useFetch(url);

  useEffect(() => {
    getType();
  }, []);

  const infoSelect = useRef();

  const handleChange = (e) => {
    setSelectInfo(infoSelect.current.value);
  };

  return (
    <select className="select__type" ref={infoSelect} onChange={handleChange}>
      <option value="allpokemons"> All Pokemons </option>
      {type?.results.slice(0, 18).map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectPokeType;
