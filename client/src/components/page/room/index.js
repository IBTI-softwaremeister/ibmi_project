import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatRoom from "../../common/chatRoom";
import * as S from "./styles";

const Room = () => {
  const [data, setData] = useState([]);

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

  return (
    <>
      <>
        <S.Banner>
          <div>
            <h1>채팅방 목록</h1>
            <p>
              만약 관심사 유형이 다르더라도 같은 관심사를 가진 사람들과
              <br />
              소통할 수 있습니다.
            </p>
          </div>
        </S.Banner>
        <S.ContainerRoom>
          {data.map((item) => (
            <ChatRoom data={item} />
          ))}
        </S.ContainerRoom>
      </>
    </>
  );
};

export default Room;
