import React, { useState } from "react";
import { Container } from "./styles";
import Form from "../Form/Form";

function Todo() {
  const [input, setInput] = useState("");

  return (
    <Container>
      <p>Hello, this is the todo </p>

      <Form input={input} setInput={setInput} />

      {/* To Do List  */}

      {/* Key  */}

      {/* Author Component  */}
    </Container>
  );
}

export default Todo;
