import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputForm = styled.div`
  height: 40px;
  border: 1px solid #263238;
  border-top: none;
  display: flex;
  width: 30%;

  input {
    height: 100%;
    flex: 85%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;

    outline: none;
    font-family: "Open Sans", sans-serif;
  }

  button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: transparent;
    outline: none;
    font-size: 25px;
    color: lightgray;
  }
`;

export const BodyDiv = styled.div`
  width: 30%;
  height: calc(100vh - 40px);
  border: 1px solid #263238;
  position: relative;
  height: 70vh;

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

export const MessageContent = styled.div`
  min-height: 40px;
  max-width: 300px;
  background-color: #252525;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 0 5px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const MessageMeta = styled.div`
  display: flex;
  font-size: 12px;
  margin: 0px 5px;
`;
