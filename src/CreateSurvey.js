import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./CreateSurvey.css"; 
import MultiSelect from "./Multi-select"
import SingleSelect from "./Single-Select"
const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState(" Select Question Type");
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownText}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem style={{textAlign:"center"}}
            onClick={(e) => {
              setDropdownText("Multi-Select");
            }}
          >
            Multi-Select{" "}
          </DropdownItem>

          <DropdownItem
            onClick={(e) => {
              setDropdownText("Single-Select");
            }}
          >
            Single-Select
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    {
        dropdownText==="Multi-Select"?<MultiSelect/>:null 
    }
    {
        dropdownText==="Single-Select"?<SingleSelect/>:null
    }
    </>
  );
};

export default Example;
