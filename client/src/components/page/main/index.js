import io from "socket.io-client";
import { useState } from "react";
import Chat from "../chat";
import * as S from "./styles";
import checkImg from "../../../asset/image/check.png";
import questionImg from "../../../asset/image/question.png";
import seriousImg from "../../../asset/image/serious.png";

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

  const tip = [
    {
      image: checkImg,
      content: `모든 질문에 답변해야 검사가\n종료됩니다.`,
      color: "#f4a5a5",
    },
    {
      image: questionImg,
      content: `질문을 보는 순간 들었던 생각에\n체크하는 것이 좋습니다.`,
      color: "#a5b2f4",
    },
    {
      image: seriousImg,
      content: `검사는 검사일 뿐 너무 진지하게\n받아들이지 않는 것이 좋아요.`,
      color: "#f4e8a5",
    },
  ];

  return (
    <>
      {/* {!showChat ? (
        <S.Join>
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
      )} */}
      <S.MainDiv>
        <div style={{ width: "100vw", height: "87px" }} />
        <S.Circle />
        <S.Banner>
          <div>
            <h1>무료 관심사 검사</h1>
            <p>
              나의 몰랐던 관심사를 알아보고 <br />
              나의 비슷한 관심사를 가진 사람들과 소통해봐요.
            </p>
            <button>자세히 알아보기</button>
          </div>
        </S.Banner>
        <S.TipDiv>
          {tip.map((item) => (
            <>
              <div style={{ backgroundColor: `${item.color}` }}>
                <img src={item.image} alt={item.content} />
                <p>{item.content}</p>
              </div>
            </>
          ))}
        </S.TipDiv>
      </S.MainDiv>
    </>
  );
};

export default Main;
