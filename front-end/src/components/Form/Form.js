import React, { useState } from "react";
import { FormContainer, Input, Button } from "./styles";

function Form({ input, setInput }) {
  console.log(setInput);
  console.log("input inside form: ", input);
  return (
    <FormContainer>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        role="input"
      />
      <Button type="submit">Add</Button>
    </FormContainer>
  );
}

export default Form;
