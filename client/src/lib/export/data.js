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
    title: "ASSK",
    ex: "활동적이고 사회적이며 예술적 감각이 있고 잘 알려져있는 사람"
  },
  {
    img: band,
    title: "ASSU",
    ex: "활동적이고 사회적이며 예술적 감각이 있고 알려지지 않은 사람"
  },
  {
    img: concert,
    title: "ASIK",
    ex: "활동적이고 사회적이며 무감각하고 잘 알려져있는 사람"
  },
  {
    img: gallery,
    title: "ASIU",
    ex: "활동적이고 사회적이며 무감각하고 알려지지 않은 사람"
  },
  {
    img: instrument,
    title: "APSK",
    ex: "활동적이고 개인적이며 예술적이고 잘 알려져있는 사람"
  },
  {
    img: music,
    title: "APSU",
    ex: "활동적이고 개인적이며 예술적이고 알려지지 않은 사람"
  },
  {
    img: paint,
    title: "APIK",
    ex: "활동적이고 개인적이며 무감각하고 잘 알려져있는 사람"
  },
  {
    img: photo,
    title: "APIU",
    ex: "활동적이고 개인적이며 무감각하고 알려지지 않은 사람"
  },
  {
    img: photoart,
    title: "IPIK",
    ex: "비활동적이고 개인적이며 무감각하고 잘 알려져있는 사람"
  },
  {
    img: riding,
    title: "IPIU",
    ex: "비활동적이고 개인적이며 무감각하고 알려지지 않은 사람"
  },
  {
    img: selfie,
    title: "IPAK",
    ex: "비활동적이고 개인적이며 예술적 감각이 있고 잘 알려져있는 사람"
  },
  {
    img: solotour,
    title: "IPSU",
    ex: "비활동적이고 개인적이며 예술적 감각이 있고 잘 알려지지 않은 사람"
  },
  {
    img: sports,
    title: "ISIK",
    ex: "비활동적이고 사회적이며 무감각하고 잘 알려져있는 사람"
  },
  {
    img: tour,
    title: "ISIU",
    ex: "비활동적이고 사회적이며 무감각하고 잘 알려지지 않은 사람"
  },
  {
    img: waterpaint,
    title: "ISSK",
    ex: "비활동적이고 사회적이며 예술적 감각이 있고 잘 알려져있는 사람"
  },
  {
    img: write,
    title: "ISSU",
    ex: "비활동적이고 사회적이며 예술적 감각이 있고 잘 알려지지 않은 사람"
  }
]

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

  {
    content: "남들이 잘 모르는 것에 대해 딱히 알고 싶지 않으신가요?",
    field: "KU",
  },
  {
    content: "인기있는 일이라면 대체로 눈길이 가시나요?",
    field: "KU",
  },
  { content: "유명한 분야를 선호하시나요?", field: "KU" },
  { content: "심오한 분야는 취향이 아니라고 생각하시나요?", field: "KU" },
  {
    content:
      "잘 알려지지 않은 문제들보다는 잘 알려진 취미가 중요하다고 생각하시나요?",
    field: "KU",
  },
];

export const SuffleQuestion = question.sort(() => Math.random() - 0.5);
