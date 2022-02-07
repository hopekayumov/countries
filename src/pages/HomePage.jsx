import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../constants/Api";
import { useNavigate } from "react-router-dom";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";

function HomePage({ countries, setCountries }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((country) => {
          const countryInfo = {
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
          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
}

export default HomePage;
