import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ fullList }) {

  const pokemonCardList = fullList.map(e => <PokemonCard key={e.id} item={e} /> ) 
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCardList}
    </Card.Group>
  );
}

export default PokemonCollection;
