import camping from "../../asset/image/camping.png";
import band from "../../asset/image/band.png";
import concert from "../../asset/image/concert.png";
import gallery from "../../asset/image/gallery.png";
import instrument from "../../asset/image/instrument.png";
import music from "../../asset/image/music.png";
import paint from "../../asset/image/paint.png";
import photo from "../../asset/image/photo.png";
import photoart from "../../asset/image/photoart.png";
import riding from "../../asset/image/riding.png";
import selfie from "../../asset/image/selfie.png";
import solotour from "../../asset/image/solotour.png";
import sports from "../../asset/image/sports.png";
import tour from "../../asset/image/tour.png";
import waterpaint from "../../asset/image/waterpaint.png";
import write from "../../asset/image/write.png";

export const Images = [
  {
    img: camping,
    title: "ASAP",
  },
  {
    img: band,
    title: "ASAU",
  },
  {
    img: concert,
    title: "ASIP",
  },
  {
    img: gallery,
    title: "ASIU",
  },
  {
    img: instrument,
    title: "APAP",
  },
  {
    img: music,
    title: "APAU",
  },
  {
    img: paint,
    title: "APIP",
  },
  {
    img: photo,
    title: "APIU",
  },
  {
    img: photoart,
    title: "IPIU",
  },
  {
    img: riding,
    title: "IPIP",
  },
  {
    img: selfie,
    title: "IPAU",
  },
  {
    img: solotour,
    title: "IPAP",
  },
  {
    img: sports,
    title: "ISIU",
  },
  {
    img: tour,
    title: "ISIP",
  },
  {
    img: waterpaint,
    title: "ISAU",
  },
  {
    img: write,
    title: "ISAP",
  },
];

export const firstNameData = [
  "노련한",
  "귀여운",
  "멋진",
  "차가운",
  "엉뚱한",
  "인기있는",
  "아름다운",
  "기품있는",
  "용기있는",
  "청순한",
  "위대한",
  "신실한",
  "매력적인",
];
export const lastNameDate = [
  "곤잘레스",
  "아그네스",
  "크리스",
  "케이티",
  "링",
  "리사",
  "마샤",
  "크리스티나",
  "루시",
  "필리스",
  "프레드",
  "알리샤",
  "안드레",
  "소피아",
  "실베스터",
  "빅토리아",
  "매거릿",
  "헬리더",
];

const question = [
  { content: "평소 운동을 즐겨 하시나요?", field: "AI" },
  { content: "스포츠 경기를 보는 것을 즐기시나요?", field: "AI" },
  { content: "스스로를 활동적인 사람이라고 생각하시나요?", field: "AI" },
  { content: "직접 몸을 움직일 때 즐거우신가요?", field: "AI" },
  { content: "야외활동을 즐겨 하시는 편인가요?", field: "AI" },

  { content: "사람들과 어울리는 것이 편한가요?", field: "SP" },
  { content: "사회문제에 관심이 많은 편인가요?", field: "SP" },
  { content: "인간관계가 원할한 편인가요?", field: "SP" },
  { content: "뉴스를 자주 보시나요?", field: "SP" },
  { content: "여러 단체활동에 참여하는 편인가요?", field: "SP" },

  { content: "감상적이라 생각하는 편인가요?", field: "SI" },
  { content: "각종 전시회에 자주 참여하시나요?", field: "SI" },
  { content: "창작 행위에 관심이 많으신가요?", field: "SI" },
  { content: "상상력이 뛰어난 편인가요?", field: "SI" },
  { content: "자신의 생각을 표현하는 것을 좋아하시나요?", field: "SI" },

  { content: "평소 돈이나 경제에 대한 관심이 많으신가요?", field: "PU" },
  {
    content: "내 행동이 수익으로 연결되면 좋겠다고 생각하시나요?",
    field: "PU",
  },
  { content: "내 관심사는 미래가 유망한 분야인가요?", field: "PU" },
  { content: "경제에 대해 아는 것은 중요하다고 생각하시나요?", field: "PU" },
  { content: "흥미가 있더라도 수익이 없다면 싫으신가요?", field: "PU" },
];

export const SuffleQuestion = question.sort(() => Math.random() - 0.5);
