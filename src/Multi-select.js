import React, { useState } from "react";
import "./SingleSelect.css";
import { Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
function MultiSelect(props) {
  const [option, setOption] = useState([""]);
  const [question, setQuestion] = useState("");
  //   i was making misatke of simply adding the earlier value of option array with ""
  // i.e (option,"")
  // instead of ([option,""])
  const addOption = () => {
    if (option.length < 4) setOption([...option, ""]);
  };
  const removeOption = (index) => {
    option.splice(index, 1);
    setOption([...option]);
  };
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
    <>
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
        {option.map((item, idx) => {
          return (
            <InputGroup className="input-grp">
              <Input
                // style={{width:"400px"}}
                placeholder={`Option ${idx + 1}`}
                value={item}
                key={idx}
                onChange={(e) => setOptionValue(e.target.value, idx)}
              />
              <InputGroupAddon style={{}} addonType="append">
                <Button
                  disabled={true ? option.length === 4 : false}
                  style={{
                    width: "40px",
                    border: "1px solid black",
                    margin: "1px",
                    borderRadius: "0px",
                  }}
                  onClick={addOption}
                >
                  +
                </Button>
                <Button
                  disabled={true ? option.length === 1 : false}
                  style={{
                    width: "40px",
                    border: "1px solid black",
                    margin: "1px",
                    borderRadius: "0px",
                  }}
                  onClick={() => {
                    removeOption(idx);
                  }}
                >
                  -
                </Button>
              </InputGroupAddon>
            </InputGroup>
          );
        })}
      </div>
      {option.length === 4 ? (
        <>
          <Button className="btn-survey" disabled={checkforEmpty()}>
            Add Question
          </Button>
          <Button className="btn-survey" disabled={checkforEmpty()}>
            Publish
          </Button>
        </>
      ) : null}
    </>
  );
}

export default MultiSelect;
