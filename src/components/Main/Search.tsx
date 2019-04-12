import React, { useState, SyntheticEvent, MouseEvent } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  height: 30px;
  background: none;
  box-sizing: border-box;
  border: 2px solid lightgray;
  border-right: 0;
  border-radius: 2px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Button = styled.button`
  color: white;
  background: green;
  border: 0;
  border-radius: 0px 2px 2px 0px;
  height: 30px;
  outline: none;
`;

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setSearchInput(value);
  };

  return (
    <>
      <Input
        placeholder="Stalk here..."
        value={searchInput}
        onChange={handleChange}
      />
      <Button onClick={e => onSearch(e, searchInput)}>Search</Button>
    </>
  );
};

export default Search;
