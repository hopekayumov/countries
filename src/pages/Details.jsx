import React from "react";
import { useParams } from "react-router-dom";

function Details({ match }) {
  const name = useParams();
  return <div>Details {name.name}</div>;
}

export default Details;
