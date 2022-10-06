import React from "react";
import * as S from "./styles";

const ChatRoom = (props) => {
  const { room, desciption } = props.data;
  return (
    <>
      <S.MainDiv>
        <span>{room}</span>
        <button>참가하기</button>
      </S.MainDiv>
    </>
  );
};

export default ChatRoom;
