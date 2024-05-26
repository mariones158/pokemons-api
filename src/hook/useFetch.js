import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getApi = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setInfoApi(res.data);
        setHasError(false);
      })
      .catch((e) => console.log(e))
      .finally(setIsLoading(false));
  };

  const getTypeApi = (urlType) => {
    setIsLoading(true);
    axios
      .get(urlType)
      .then((res) => {
        const obj = {
          results: res.data.pokemon.map((e) => e.pokemon),
        };
        setInfoApi(obj);
        setHasError(false);
      })
      .catch((e) => console.log(e))
      .finally(setIsLoading(false));
  };

  return [infoApi, getApi, getTypeApi, isLoading, hasError];
};

export default useFetch;
