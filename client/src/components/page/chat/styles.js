import styled from "styled-components";

export const MainDiv = styled.div`
  width: 1490px;
  height: calc(100vh - 101px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const InputForm = styled.div`
  height: 129px;
  border-top: none;
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background-color: #cbd4ce;
  border: 1px solid #cbd4ce;

  input {
    height: 88px;
    width: 1175px;
    margin: 0px 30px;
    border-radius: 12px;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;

    outline: none;
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
  }

  button {
    width: 175px;
    height: 89px;
    background-color: #32b156;
    border: none;
    border-radius: 12px;
    outline: none;
    color: #fff;
    font-size: 32px;
  }
`;

export const BodyDiv = styled.div`
  width: 100%;
  height: calc(100% - 132px);
  border-right: 1px solid #263238;
  border-bottom: 1px solid #263238;
  position: relative;

  > div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

    #you {
      justify-content: flex-start;
    }

    #other {
      justify-content: flex-end;
    }
  }
`;

export const Message = styled.div`
  height: auto;
  padding: 10px;
  display: flex;
`;

export const Author = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border: 1px black solid;
  }
  div {
    margin: 0 26px;
    font-weight: bold;
    font-size: 24px;
  }
`;

export const MessageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    margin: 0 7px;
  }
  p {
    margin: 0 26px;
    max-width: 606px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const RightPart = styled.div`
  width: 440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: black; */

  div {
    width: 300px;
    height: 100px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
  }
  div span {
    color: #9de07d;
  }
  p {
    white-space: pre-line;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }
  p span {
    color: #32b156;
  }
  .notice_p {
    color: red;
    text-align: start;
    font-size: 20px;
    font-weight: 700;
  }
`;
