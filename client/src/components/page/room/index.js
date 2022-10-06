import axios from "axios";
import React, { useEffect, useState } from "react";
import { firstNameData, lastNameData } from "../../../lib/export/data";
import { io } from "socket.io-client";
import ChatRoom from "../../common/chatRoom";
import * as S from "./styles";
import { Popup } from "reactjs-popup";
import { BiRefresh } from "react-icons/bi";
import Chat from "../chat";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const [data, setData] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [hostingData, setHostingData] = useState({
    title: "",
    name: `${
      firstNameData[Math.floor(Math.random() * firstNameData.length)] +
      " " +
      lastNameData[Math.floor(Math.random() * lastNameData.length)]
    }`,
    description: "",
  });

  useEffect(() => {
    getRoom();
  }, []);

  const getRoom = () => {
    axios({
      url: "http://localhost:3001/getRoom",
      method: "get",
    }).then((res) => {
      setData(res.data);
    });
  };

  const check = () => {
    if (hostingData.description === "" || hostingData.title === "") {
      alert("제목 또는 설명을 입력해주세요.");
      return;
    } else {
      const room = hostingData.title;
      const username = hostingData.name;
      const description = hostingData.description;
      socket.emit("host_room", { room, username, description });
      setShowChat(true);
    }
  };

  return (
    <>
      {showChat ? (
        <Chat
          socket={socket}
          username={hostingData.name}
          room={hostingData.title}
          func={setShowChat}
        />
      ) : (
        <>
          <S.Banner>
            <div
              className="new_room_button"
              onClick={() => {
                setModalOpened(true);
              }}
            >
              새로운 채팅방 만들기
            </div>
            <div>
              <h1>채팅방 목록</h1>
              <p>
                만약 관심사 유형이 다르더라도 같은 관심사를 가진 사람들과
                <br />
                소통할 수 있습니다.
              </p>
            </div>
          </S.Banner>
          <S.Circle/>
          <S.ContainerRoom>
            {data.length !== 0 ? (
              data.map((item) => (
                <ChatRoom
                  data={item}
                  host={hostingData}
                  socket={socket}
                  func={{ setShowChat, setHostingData }}
                />
              ))
            ) : (
              <span>채팅방이 없습니다..</span>
            )}
          </S.ContainerRoom>
          <Popup
            open={modalOpened}
            onClose={() => {
              setModalOpened(false);
            }}
          >
            <S.RoomBox>
              <div className="room_input_box">
                <label>제목</label>
                <input
                  value={hostingData.title}
                  onChange={(e) =>
                    setHostingData({ ...hostingData, title: e.target.value })
                  }
                />
              </div>
              <div className="room_input_box">
                <label>닉네임</label>
                <span>{hostingData.name}</span>
                <BiRefresh
                  size={40}
                  onClick={() => {
                    setHostingData({
                      ...hostingData,
                      name:
                        firstNameData[
                          Math.floor(Math.random() * firstNameData.length)
                        ] +
                        " " +
                        lastNameData[
                          Math.floor(Math.random() * firstNameData.length)
                        ],
                    });
                  }}
                />
              </div>
              <div className="explanation_input">
                <label>설명</label>
                <textarea
                  value={hostingData.description}
                  onChange={(e) => {
                    setHostingData({
                      ...hostingData,
                      description: e.target.value,
                    });
                  }}
                  placeholder="채팅방에 대한 설명을 입력해주세요."
                />
              </div>
              <button onClick={() => check()}>생성하기</button>
            </S.RoomBox>
          </Popup>
        </>
      )}
    </>
  );
};

export default Room;
