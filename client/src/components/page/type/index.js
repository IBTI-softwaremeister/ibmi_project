import React, { useState, useRef } from "react";
import { io } from "socket.io-client";
import Header from "../../common/header/index";
import * as S from "./styles";
import { Images, firstNameData, lastNameDate } from "../../../lib/export/data";
import profile from "../../../asset/image/profile.png";
import host from "../../../asset/image/host.webp";
import Popup from "reactjs-popup";
import Chat from "../chat/index";

const socket = io.connect("http://localhost:3001");

const Index = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedData, setSelectedData] = useState({
    ibti: "",
    img: "",
    ex: "",
  });
  // setData({...data, name:firstNameData[Math.floor(Math.random() * firstNameData.length)] 
  //   + " " + lastNameDate[Math.floor(Math.random() * firstNameData.length)]})
  return (
    <>
    <Popup
      open={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <S.PopupWindow>
        <span>{selectedData.ibti}</span>
        <img src={selectedData.img} alt='' />
        <p>{selectedData.ex}</p>
      </S.PopupWindow>
    </Popup>
    <S.Banner>
      <div className='green_box'></div>
      <span>관심사 유형</span>
      <p>총 16개의 관심사 유형이 있고, 같은 관심사 유형을 갖고 있는 사람들끼리<br/>
소통 가능한 채팅을 진행 할 수 있습니다.</p>
      <S.TypeBox>
        {
          Images.map((image, idx) => (
            <S.Type 
              onClick={() => {
                setModalOpened(true)
                setSelectedData({
                  ibti: image.title,
                  img: image.img,
                  ex: image.ex
                })
              }}
            >
              <img src={image.img} alt="" />
              <span>{image.title}</span>
              <span style={{display: "none"}}>{image.ex}</span>
            </S.Type>
          ))}
        </S.TypeBox>
      </S.Banner>
    </>
  );
};

export default Index;
