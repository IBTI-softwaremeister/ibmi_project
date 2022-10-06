import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;

  img {
    position: absolute;
    left: 4%;
    height: 60px;
  }

  div {
    width: 20%;
    display: flex;
    justify-content: space-between;
    color: grey;
    font-size: 20px;
  }
  div span {
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s ease-in-out;
  }
  div a {
    text-decoration: none;
    color: grey;
  }
  div span:hover {
    color: black;
  }
`;
