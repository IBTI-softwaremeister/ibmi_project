import styled from "styled-components";

export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    z-index: 99;
    background-color: #fff;

    img {
        height: 60px;
        position: absolute;
        left: 40px;
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
