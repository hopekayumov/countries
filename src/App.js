import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Controls from "./components/Controls";
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "./config";
import List from "./components/List";
import Card from "./components/Card";

function App() {
  const [countries, setCountires] = useState([]);
  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountires(data));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((country) => {
            const CountryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: "Population",
                  description: country.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };
            return <Card key={country.name} {...CountryInfo}></Card>;
          })}
        </List>
      </Main>
    </>
  );
}

export default App;
