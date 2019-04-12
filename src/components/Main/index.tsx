import * as React from "react";
import Search from "./Search";

const handleSearch = (
  e: React.MouseEvent<HTMLButtonElement>,
  username: String
) => {
  console.log(username);
};

const Main: React.SFC<{}> = () => (
  <React.Fragment>
    <Search onSearch={handleSearch} />
    <h1>Main Component</h1>
  </React.Fragment>
);

export default Main;
