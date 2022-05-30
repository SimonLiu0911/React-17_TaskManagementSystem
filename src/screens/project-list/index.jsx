import React, { useEffect, useState } from "react";
import List from "./list";
import SearchPanel from "./searchPanel";

const Index = () => {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    personId: "",
    name: "",
  });
  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} />
      <List list={list} />
    </div>
  );
};

export default Index;
