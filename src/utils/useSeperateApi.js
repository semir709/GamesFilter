import { useEffect, useState } from "react";

const useSeperateApi = (data) => {
  let [col1, setCol1] = useState([]);
  let [col2, setCol2] = useState([]);
  let [col3, setCol3] = useState([]);
  let [col4, setCol4] = useState([]);

  useEffect(() => {
    let c = 1;

    data.forEach(({ name }) => {
      if (c > 4) c = 1;

      if (c === 1) {
        setCol1((arr) => [...arr, name]);
      } else if (c === 2) {
        setCol2((arr) => [...arr, name]);
      } else if (c === 3) {
        setCol3((arr) => [...arr, name]);
      } else if (c === 4) {
        setCol4((arr) => [...arr, name]);
      }
      c++;
    });
  }, [data]);

  return { col1, col2, col3, col4 };
};

export default useSeperateApi;
