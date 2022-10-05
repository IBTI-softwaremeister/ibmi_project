import io from "socket.io-client";
import { useState } from "react";
import Chat from "../chat";
import * as S from "./styles";
import Header from "../../common/header/index";
const socket = io.connect("http://localhost:3001");

const Main = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
      {!showChat ? (
        <S.Join>
          <Header />
          <input
            type="text"
            placeholder="MBTI를 작성해주세요"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </S.Join>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </>
  );
};

export default Main;
