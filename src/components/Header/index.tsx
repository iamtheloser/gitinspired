import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: grid;
  height: 50px;
  justify-content: center;
  align-content: center;
  font-size: 30px;
  font-weight: 100;
  border-bottom: 1px solid gray;
`;

const LinkWrapper = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header: React.SFC<{}> = () => (
  <HeaderContainer>
    <LinkWrapper to="/">Git Inspired</LinkWrapper>
  </HeaderContainer>
);

export default Header;
