import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ item }) {

  const [isFront, setIsFront] = useState(true);

  function switchSprite() {
    setIsFront(!isFront);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={switchSprite} src={isFront ? item.sprites.front : item.sprites.back } alt={item.name} />
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {item.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
