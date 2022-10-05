import React from 'react'
import * as S from "./styles"
import logo from "../../../asset/image/logo.png"

const index = () => {
  return (
    <>
        <S.Header>
          <img src={logo} alt="" />
          <div>
            <span>관심사 질문</span>
            <span>관심사 유형</span>
          </div>
        </S.Header>
    </>
  )
}

export default index