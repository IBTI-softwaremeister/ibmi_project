import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Question = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 102px;
  display: inline-flex;
  align-items: center;
  img {
    margin-left: 24px;
  }
`;

export const Sortation = styled.hr`
  margin-bottom: 0px;
  width: 70vw;
  height: 1px;
  background-color: rgba(0,0,0,0.5);
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 54px;
  span {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const AnswerBtn = styled.button`
  width: ${(props) => `${props.scale}` + "px"};
  height: ${(props) => `${props.scale}` + "px"};
  margin: 0px 25px;
  outline: none;
  background: none;
  border-radius: 50%;
  border: 3px ${(props) => `${props.color}`} solid;
  transition: ease-in-out 0.2s;
  &:hover {
    border: 10px ${(props) => `${props.color}`} solid;
  }
`;
