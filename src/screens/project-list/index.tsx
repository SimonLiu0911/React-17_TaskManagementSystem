import React, { useEffect, useState } from "react";
import qs from "qs";
import List from "./list";
import SearchPanel from "./searchPanel";
import { cleanObject, useMount, useDebounce } from "../../utils";

const apiUrl = process.env.REACT_APP_URL;

const Index = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

//   interface T {
// 	  personId: string;
// 	  name: string;
//   }

  const [param, setParam] = useState({
    personId: "",
    name: "",
  });
  const debouncedParam = useDebounce(param, 200);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/projectUsers`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default Index;
