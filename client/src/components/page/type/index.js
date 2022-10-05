import React from 'react'
import Header from '../../common/header/index'
import * as S from "./styles"
import camping from "../../../asset/image/camping.png"
import band from "../../../asset/image/band.png"
import concert from "../../../asset/image/concert.png"
import gallery from "../../../asset/image/gallery.png"
import instrument from "../../../asset/image/instrument.png"
import music from "../../../asset/image/music.png"
import paint from "../../../asset/image/paint.png"
import photo from "../../../asset/image/photo.png"
import photoart from "../../../asset/image/photoart.png"
import riding from "../../../asset/image/riding.png"
import selfie from "../../../asset/image/selfie.png"
import solotour from "../../../asset/image/solotour.png"
import sports from "../../../asset/image/sports.png"
import tour from "../../../asset/image/tour.png"
import waterpaint from "../../../asset/image/waterpaint.png"
import write from "../../../asset/image/write.png"

const index = () => {
  return (
    <>
      <Header />
      <S.Banner>
        <span>관심사 유형</span>
        <p>총 16개의 관심사 유형이 있고, 같은 관심사 유형을 갖고 있는 사람들끼리<br/>
소통 가능한 채팅을 진행 할 수 있습니다.</p>
        <S.TypeBox>
          <S.Type>
            <img src={camping} alt='' />
            <span>캠핑 가기</span>
          </S.Type>
          <S.Type>
            <img src={band} alt='' />
            <span>밴드 가입하기</span>
          </S.Type>
          <S.Type>
            <img src={concert} alt='' />
            <span>콘서트 보기</span>
          </S.Type>
          <S.Type>
            <img src={gallery} alt='' />
            <span>미술관 가기</span>
          </S.Type>
          <S.Type>
            <img src={instrument} alt='' />
            <span>악기 배우기</span>
          </S.Type>
          <S.Type>
            <img src={music} alt='' />
            <span>음악 만들기</span>
          </S.Type>
          <S.Type>
            <img src={paint} alt='' />
            <span>그림 그리기</span>
          </S.Type>
          <S.Type>
            <img src={photo} alt='' />
            <span>사진 찍기</span>
          </S.Type>
          <S.Type>
            <img src={photoart} alt='' />
            <span>포토아트하기</span>
          </S.Type>
          <S.Type>
            <img src={riding} alt='' />
            <span>자전거타기</span>
          </S.Type>
          <S.Type>
            <img src={selfie} alt='' />
            <span>셀카 찍기</span>
          </S.Type>
          <S.Type>
            <img src={solotour} alt='' />
            <span>혼자 여행하기</span>
          </S.Type>
          <S.Type>
            <img src={sports} alt='' />
            <span>스포츠활동하기</span>
          </S.Type>
          <S.Type>
            <img src={tour} alt='' />
            <span>단체여행가기</span>
          </S.Type>
          <S.Type>
            <img src={waterpaint} alt='' />
            <span>수체화 하기</span>
          </S.Type>
          <S.Type>
            <img src={write} alt='' />
            <span>글 쓰기</span>
          </S.Type>
        </S.TypeBox>
      </S.Banner>
    </>
  )
}

export default index