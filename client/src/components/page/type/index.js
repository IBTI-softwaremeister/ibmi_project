import React, { useState, useRef } from 'react'
import { io } from 'socket.io-client'
import Header from '../../common/header/index'
import * as S from "./styles"
import { Images, firstNameData, lastNameDate } from '../../../lib/export/data'
import profile from "../../../asset/image/profile.png"
import host from "../../../asset/image/host.webp"
import Popup from "reactjs-popup"
import Chat from "../chat/index"

const socket = io.connect("http://localhost:3001");

const Index = () => {
  const nameInput = useRef(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectPopup, setSelectPopup] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [hostPopup, setHostPopup] = useState(false);
  const [hostData, setHostData] = useState({
    name: "",
    category: "",
    explanation: "",
  });
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
      open={selectPopup}
      onClose={() => {
        setSelectPopup(false)
      }}
    >
      <S.PopupWindow>
        <div className='select_window'>
          <div className='select_box'>
            <img src={host} alt='' />
            <p>채팅방의 호스트가 되어<br/> 자신의 전문분야를 다른 사람들에게 보여주세요!</p>
            <button 
              className='select_button'
              onClick={() => {
                setIsHost(true)
                setSelectPopup(false)
                setHostPopup(true)
              }}
            >
              채팅방 만들기
            </button>
          </div>
          <div className='select_box'>
            <img src={profile} alt='' />
            <p>채팅방의 멤버가 되어<br/> 다른 사람들로부터 새로운 정보를 얻으세요!</p>
            <button 
              className='select_button'
              onClick={() => {
                setIsMember(true)
                setSelectPopup(false)
                setModalOpened(true)
              }}
            >
              채팅방 참여하기
            </button>
          </div>
        </div>
      </S.PopupWindow>
    </Popup>
    <Popup
      open={hostPopup}
      onOpen={() => {
        setData({...data, name:firstNameData[Math.floor(Math.random() * firstNameData.length)] 
          + " "
          + lastNameDate[Math.floor(Math.random() * firstNameData.length)]})
      }}
      onClose={() => setHostPopup(false)}
    >
      <S.PopupWindow>
        <img src={profile} alt='' />
        <div>
          <label>호스트 닉네임</label>
            <input 
              value={data.name} 
              onChange={(e) => setData({...data, name: e.target.value})}
            />
        </div>
        <textarea 
          value={hostData.explanation} 
          placeholder='채팅방에 대한 설명을 적어주세요...' 
          onChange={(e) => {
            // setHostData(...hostData, [explanation]:)
          }}
        />
        <div>
          <button 
            onClick={() => {

            }}
          >
            돌아가기
          </button>
          <button>만들기</button>
        </div>
      </S.PopupWindow>
    </Popup>
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
          <button onClick={() => (setShowChat(false))} >
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
              setSelectPopup(true)
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