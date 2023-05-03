import React from "react";

function Search({ searchPokemon }) {

  function handleSearch(e) {
    searchPokemon(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" placeholder="Search Pokemon" onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
