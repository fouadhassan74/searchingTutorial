import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  // Seaching in Client Side
  // const keys = ["first_name", "last_name", "email"];
  // const search = (data) => {
  //   const filter = data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  //   return filter;
  // };
  // =======================================================
  // By using paggination
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:9900/?query=${query}`);
      const data = res.data;
      setData(data);
    };
    fetchData();
  }, [query]);
  return (
    <div className='app'>
      <input
        className='search'
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table
        // users={search(Users)}
        users={data}
      />
    </div>
  );
}

export default App;
