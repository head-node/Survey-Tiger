import React, { useState } from "react";
import "./SingleSelect.css";
import { Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
function SingleSelect(props) {
  const [option, setOption] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const setOptionValue = (value, index) => {
    option[index] = value;
    console.log(value);
    //   we updated our array option at i = index
    // now the above step at 22 is for storing the update array in our state+

    setOption([...option]);
  };
  const checkforEmpty = () => {
    return (
      question.trim() === "" ||
      option.find((opt) => opt.trim() === "") !== undefined
    );
  };
  return (
    <div>
      <InputGroup className="input-grp">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Your Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </InputGroup>
      <br />
      <p>Options</p>
      <InputGroup className="input-grp">
        <Input
          placeholder="Option 1"
          value={option[0]}
          onChange={(e) => setOptionValue(e.target.value, 0)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="input-grp">
        <Input placeholder="Option 2" />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div>
        <Button className="btn-survey" disabled={checkforEmpty()}>
          Add Question
        </Button>
        <Button className="btn-survey" disabled={checkforEmpty()}>
          Publish
        </Button>
      </div>
    </div>
  );
}

export default SingleSelect;
