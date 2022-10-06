import * as S from "./styles";
import speakerImg from "../../../asset/image/speaker.png";
import { useState } from "react";

const Survey = (props) => {
  const { content, field } = props.prop;
  const { data, setData } = props.data;
  const [before, setBefore] = useState({ number: 0, dom: "", color: "" });

  const keyword = Array.from({ length: 6 }, () => {
    return "";
  });

  const answerData = (n, e, color) => {
    setData({ ...data, [field]: data[field] + n - before.number });

    if (before.dom) before.dom.style.border = `3px solid ${before.color}`;

    setBefore({ number: n, dom: e.target, color: color });
    e.target.style.border = `10px solid ${color}`;
  };

  function speak(text) {
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1;
    speechMsg.pitch = 1;
    speechMsg.lang = "ko-KR";
    speechMsg.text = text;

    window.speechSynthesis.speak(speechMsg);
  }

  return (
    <>
      <S.MainDiv id={props.id}>
        <S.Question>
          {content}
          <img src={speakerImg} alt="" onClick={() => speak(content)} />
        </S.Question>
        <S.Answer>
          <span style={{ marginRight: "75px", color: "#32B156" }}>그렇다.</span>
          {keyword.map((item, i) => (
            <>
              <S.AnswerBtn
                color={i < 3 ? "#32B156" : "#833D3D"}
                scale={i < 3 ? 150 - i * 30 : 90 + (i % 3) * 30} //2 2 3 3 4 3 5 2 6 1
                onClick={(e) =>
                  answerData(
                    i < 3 ? 7 - i * 2 : -3 - (i % 3) * 2,
                    e,
                    i < 3 ? "#32B156" : "#833D3D"
                  )
                }
              ></S.AnswerBtn>
            </>
          ))}
          <span style={{ marginLeft: "75px", color: "#833D3D" }}>아니다.</span>
        </S.Answer>
      </S.MainDiv>
      <S.Sortation />
    </>
  );
};

export default Survey;
