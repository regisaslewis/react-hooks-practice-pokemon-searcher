import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [fullList, setFullList] = useState([]);
  const [pokeName, setPokeName] = useState("")
  const [hp, setHp] = useState("")
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then(resp => resp.json())
      .then(data => setFullList(data))
  }, [])

  function searchPokemon(value) {
    fetch(`http://localhost:3001/pokemon`)
      .then(resp => resp.json())
      .then(data => {
        const searchList = data.filter(e => e.name.includes(value));
        setFullList(searchList)
      })
  }

  function changeName(e) {
    setPokeName(e.target.value)    
  }
  function changeHp(e) {
    setHp(e.target.value)
  }
  function changeFrontImage(e) {
    setFrontImage(e.target.value)
  }
  function changeBackImage(e) {
    setBackImage(e.target.value)
  }

  function submitForm() {
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: pokeName,
        hp: hp,
        sprites: {
          front: frontImage,
          back: backImage
        }
      })
    })
    .then(resp => resp.json())
    .then(data => setFullList([...fullList, data]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        pokeName={pokeName}
        hp={hp}
        frontImage={frontImage}
        backImage={backImage}
        changeName={changeName}
        changeHp={changeHp}
        changeFrontImage={changeFrontImage}
        changeBackImage={changeBackImage}
        submitForm={submitForm}
      />
      <br />
      <Search searchPokemon={searchPokemon} />
      <br />
      <PokemonCollection fullList={fullList} />
    </Container>
  );
}

export default PokemonPage;
