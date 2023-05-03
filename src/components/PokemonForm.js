import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({
  pokeName,
  hp,
  frontImage,
  backImage,
  changeName,
  changeHp,
  changeFrontImage,
  changeBackImage,
  submitForm
}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          submitForm();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={pokeName} onChange={changeName} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" value={hp} onChange={changeHp} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            value={frontImage}
            onChange={changeFrontImage}
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            value={backImage}
            onChange={changeBackImage}
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
