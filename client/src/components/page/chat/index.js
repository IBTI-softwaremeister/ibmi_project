import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import * as S from "./styles";

function Chat({ socket, username, room }) {
  
  return (
    <S.MainDiv>
      <S.BodyDiv>
        <ScrollToBottom>
          {messageList.map((messageContent) => {
            return (
              <S.Message
                id={username === messageContent.author ? "other" : "you"}
              >
                <div>
                  <S.MessageContent>
                    <p>{messageContent.message}</p>
                  </S.MessageContent>
                  <S.MessageMeta>
                    <p>{messageContent.time}</p>
                    <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
                      {messageContent.author}
                    </p>
                  </S.MessageMeta>
                </div>
              </S.Message>
            );
          })}
        </ScrollToBottom>
      </S.BodyDiv>
      <S.InputForm>
        <input
          type="text"
          value={currentMessage}
          placeholder="메시지를 작성해주세요.."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </S.InputForm>
    </S.MainDiv>
  );
}

export default Chat;
