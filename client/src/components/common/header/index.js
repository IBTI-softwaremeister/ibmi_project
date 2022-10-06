import React from 'react'
import * as S from "./styles"
import logo from "../../../asset/image/logo.png"
import { Link } from "react-router-dom"
 
const index = () => {
  return (
    <>
        <S.Header>
          <img src={logo} alt="" />
          <div>
            <Link to={'/#main'}>
              <span>관심사 질문</span>
            </Link>
            <Link to={'/type'}>
              <span>관심사 유형</span>
            </Link>
          </div>
        </S.Header>
    </>
  )
}

export default index