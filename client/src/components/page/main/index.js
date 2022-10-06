import { useEffect, useState } from "react";
import * as S from "./styles";
import checkImg from "../../../asset/image/check.png";
import questionImg from "../../../asset/image/question.png";
import seriousImg from "../../../asset/image/serious.png";
import Survey from "../../common/survey";
import { Images, SuffleQuestion } from "../../../lib/export/data";
import Popup from "reactjs-popup";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({
    AI: 0,
    SP: 0,
    SI: 0,
    KU: 0,
  });
  const [ibti, setIbti] = useState(
    () => JSON.parse(window.localStorage.getItem("ibti")) || ""
  );
  const [openModal, setOpenModal] = useState(false);

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

  useEffect(() => {
    window.localStorage.setItem("ibti", JSON.stringify(ibti));
  }, [ibti]);

  const onClickBtn = (str) => {
    if (current < 3) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
    if (str === "제출") {
      getIBTI(data);
      setOpenModal(true);
    }
  };

  const getIBTI = (data) => {
    let type = "";
    if (data.AI > 0) type += "A";
    else type += "I";
    if (data.SP > 0) type += "S";
    else type += "P";
    if (data.SI > 0) type += "S";
    else type += "I";
    if (data.PU > 0) type += "K";
    else type += "U";

    setIbti(type);
  };

  const getInfo = (ibti) => {
    for (let i = 0; i < Images.length; i++) {
      if (Images[i].title === ibti) {
        return {
          img: Images[i].img,
          ex: Images[i].ex,
        };
      }
    }
    return {
      img: "",
      ex: "",
    };
  };

  return (
    <>
      <Popup
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <S.ModalDiv>
          <h2>{ibti}</h2>
          <img src={getInfo(ibti).img} alt="" />
          <p>{getInfo(ibti).ex}</p>
          <button
            onClick={() => {
              window.location = "/room";
              setOpenModal(false);
            }}
          >
            채팅하러 가기
          </button>
        </S.ModalDiv>
      </Popup>
      <S.MainDiv>
        <S.Circle />
        <S.Banner>
          <div>
            <h1>무료 관심사 검사</h1>
            <p>
              나의 몰랐던 관심사를 알아보고 <br />
              나의 비슷한 관심사를 가진 사람들과 소통해봐요.
            </p>
            <a href="#main">자세히 알아보기</a>
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
        <div id="main" style={{ marginBottom: "100px" }} />
      </S.MainDiv>
      {SuffleQuestion.map((item, i) => (
        <>
          {i < (current + 1) * 5 && i >= current * 5 ? (
            <Survey prop={item} data={{ data, setData }} id={i % 5} />
          ) : (
            <></>
          )}
        </>
      ))}
      <S.Btn>
        {current !== 3 ? (
          <a href="#main" onClick={() => onClickBtn("다음")}>
            다음 &#9658;
          </a>
        ) : (
          <a href="#main" onClick={() => onClickBtn("제출")}>
            제출
          </a>
        )}
      </S.Btn>
    </>
  );
};

export default Main;
