import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import * as S from "./styles";
import profile from "../../../asset/image/profile.png";
import { speak } from "../../../lib/func/speak";
import undo from "../../../asset/image/undo.png";

function Chat({ socket, username, room, func }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      speak(currentMessage);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      speak(data.message);
    });
  }, [socket]);

  return (
    <S.MainDiv>
      <S.BodyDiv>
        <ScrollToBottom>
          <S.Undo
            onClick={() => {
              func(false);
            }}
          >
            <img src={undo} alt="" />
          </S.Undo>
          {messageList.map((messageContent) => {
            return (
              <S.Message
                id={username === messageContent.author ? "other" : "you"}
              >
                <div>
                  {username === messageContent.author ? (
                    <S.Author style={{ justifyContent: "flex-end" }}>
                      <div>{messageContent.author}</div>
                      <img src={profile} alt="" />
                    </S.Author>
                  ) : (
                    <S.Author>
                      <img src={profile} alt="" />
                      <div>{messageContent.author}</div>
                    </S.Author>
                  )}
                  {username === messageContent.author ? (
                    <S.MessageContent
                      style={{
                        justifyContent: "flex-end",
                        marginRight: "-10px",
                      }}
                    >
                      <p>{messageContent.message}</p>
                      <span>{messageContent.time}</span>
                    </S.MessageContent>
                  ) : (
                    <S.MessageContent>
                      <span>{messageContent.time}</span>
                      <p>{messageContent.message}</p>
                    </S.MessageContent>
                  )}
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
        <button onClick={sendMessage}>전송</button>
      </S.InputForm>
      <S.RightPart>
        <span>
          <p>
            채팅방 : <span>{room}</span>
          </p>
          <div>
            <img src={profile} alt="" />
            <span>{username}</span>
          </div>
        </span>
        <p className="notice_p">{`채팅은 저장되지 않습니다.\n현재 페이지를 나가면 새롭게 \n 채팅에 참여해야합니다.`}</p>
      </S.RightPart>
    </S.MainDiv>
  );
}

export default Chat;
