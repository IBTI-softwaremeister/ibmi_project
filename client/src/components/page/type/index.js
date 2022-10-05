import React, { useState, useRef } from 'react'
import { io } from 'socket.io-client'
import Header from '../../common/header/index'
import * as S from "./styles"
import { Images, firstNameData, lastNameDate } from '../../../lib/export/data'
import profile from "../../../asset/image/profile.png"
import Popup from "reactjs-popup"
import Chat from "../chat/index"

const socket = io.connect("http://localhost:3001");

const Index = () => {
  const nameInput = useRef(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [data, setData] = useState({
    name: "",
    category: ""
  })

  console.log(Math.floor(Math.random() * firstNameData.length - 1))

  async function changeName() {
    await setIsChange(true);
    nameInput.current.focus();
  }
  return (
    <>
    {showChat ? <Chat socket={socket} username={data.name} room={data.category}/> : 
    <>
    <Popup 
      open={modalOpened}
      onOpen={() => {
        // setName(
        //   firstNameData[Math.floor(Math.random() * firstNameData.length)] 
        //   + " "
        //   + lastNameDate[Math.floor(Math.random() * firstNameData.length)]
        // )
        setData({...data, name:firstNameData[Math.floor(Math.random() * firstNameData.length)] 
            + " "
            + lastNameDate[Math.floor(Math.random() * firstNameData.length)]})
      }}
      onClose={() => {
        setModalOpened(false)
        setIsChange(false)
      }}
    >
      <S.PopupWindow>
        <img src={profile} alt='' />
        <div className='Input_box'>
          <label>닉네임</label>
          {
            isChange ? 
            <input 
              ref={nameInput} 
              value={data.name} 
              onChange={(e) => setData({...data, name: e.target.value})}
            />
            : <span>{data.name}</span>
          }
        </div>
        <div className='Input_box'>
          <label>관심사</label>
          <span>{data.category}</span>
        </div>
        <div className='Button_box'>
          <button onClick={changeName} >닉네임 변경</button>
          <button onClick={() => (setShowChat(true))} >
            확인
          </button>
        </div>
      </S.PopupWindow>
    </Popup>
    <S.Banner>
      <span>관심사 유형</span>
      <p>총 16개의 관심사 유형이 있고, 같은 관심사 유형을 갖고 있는 사람들끼리<br/>
소통 가능한 채팅을 진행 할 수 있습니다.</p>
      <S.TypeBox>
        {
          Images.map((image, idx) => (
            <S.Type onClick={() => {
              setModalOpened(true)
              setData({...data, category: image.title})
            }}>
              <img src={image.img} alt='' />
              <span>{image.title}</span>
            </S.Type>
          ))
        }
      </S.TypeBox>
    </S.Banner>
    </>
    }
    </>
  )
}

export default Index