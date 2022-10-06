import * as S from "./styles";
import speakerImg from "../../../asset/image/speaker.png"

const Survey = (props) => {
  const { content, field } = props.prop;
  const { data, setData } = props.data;
  const keyword = [
    {
      color: "#32B156",
      scale: 150,
      point: 3,
    },
    {
      color: "#32B156",
      scale: 110,
      point: 2,
    },
    {
      color: "#32B156",
      scale: 87,
      point: 1,
    },
    {
      color: "#833D3D",
      scale: 87,
      point: -1,
    },
    {
      color: "#833D3D",
      scale: 110,
      point: -2,
    },
    {
      color: "#833D3D",
      scale: 150,
      point: -3,
    },
  ];

  const answerData = (n, e, color) => {

    setData({ ...data, [field]: data[field]+ n });

  
    e.target.style.border = `10px solid ${color}`
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
      <S.MainDiv>
        <S.Question>{content} <img src={speakerImg} alt="" onClick={() => speak(content)}/></S.Question>
        <S.Answer>
          <span style={{ marginRight: "75px", color: "#32B156" }}>그렇다.</span>
          {keyword.map((item) => (
            <>
              <S.AnswerBtn
                color={item.color}
                scale={item.scale}
                onClick={(e) => answerData(item.point, e, item.color)}
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
