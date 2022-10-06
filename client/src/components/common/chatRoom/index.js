import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import Popup from "reactjs-popup";
import { firstNameData, lastNameData } from "../../../lib/export/data";
import * as S from "./styles";

const ChatRoom = (props) => {
  const { room, description, member } = props.data;
  const [showModal, setShowModal] = useState(false);
  // const [username, setName] = useState(
  //   `${
  //     firstNameData[Math.floor(Math.random() * firstNameData.length)] +
  //     " " +
  //     lastNameData[Math.floor(Math.random() * lastNameData.length)]
  //   }`
  // );

  useEffect(() => {
    props.func.setHostingData({
      title: room,
      name: props.host.name,
      decription: description,
    });
  }, []);

  const joinRoom = () => {
    const room = props.host.title;
    const username = props.host.name;
    const description = props.host.description;

    props.socket.emit("host_room", { room, username, description });
    props.func.setShowChat(true);
  };

  return (
    <>
      <Popup
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <S.RoomBox>
          <div className="room_input_box">
            <label>제목</label>
            {room}
          </div>
          <div className="room_input_box">
            <label>닉네임</label>
            <span>{props.host.name}</span>
            <BiRefresh
              size={40}
              onClick={() => {
                props.func.setHostingData({
                  title: room,
                  name:
                    firstNameData[
                      Math.floor(Math.random() * firstNameData.length)
                    ] +
                    " " +
                    lastNameData[
                      Math.floor(Math.random() * lastNameData.length)
                    ],
                  decription: description,
                });
              }}
            />
          </div>
          <div className="explanation_input">
            <label>설명</label>
            <div>{description}</div>
          </div>
          <button onClick={() => joinRoom()}>들어하기</button>
        </S.RoomBox>
      </Popup>
      <S.MainDiv>
        <span>{room}</span>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          참가하기
        </button>
      </S.MainDiv>
    </>
  );
};

export default ChatRoom;
