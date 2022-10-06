import camping from "../../asset/image/camping.png"
import band from "../../asset/image/band.png"
import concert from "../../asset/image/concert.png"
import gallery from "../../asset/image/gallery.png"
import instrument from "../../asset/image/instrument.png"
import music from "../../asset/image/music.png"
import paint from "../../asset/image/paint.png"
import photo from "../../asset/image/photo.png"
import photoart from "../../asset/image/photoart.png"
import riding from "../../asset/image/riding.png"
import selfie from "../../asset/image/selfie.png"
import solotour from "../../asset/image/solotour.png"
import sports from "../../asset/image/sports.png"
import tour from "../../asset/image/tour.png"
import waterpaint from "../../asset/image/waterpaint.png"
import write from "../../asset/image/write.png"

export const Images = [
  {
    img: camping,
    title: "캠핑가기"
  },
  {
    img: band,
    title: "밴드 가입하기"
  },
  {
    img: concert,
    title: "콘서트 보러가기"
  },
  {
    img: gallery,
    title: "미술관 가기"
  },
  {
    img: instrument,
    title: "악기 배우기"
  },
  {
    img: music,
    title: "음악 만들기"
  },
  {
    img: paint,
    title: "그림 그리기"
  },
  {
    img: photo,
    title: "사진 찍기"
  },
  {
    img: photoart,
    title: "포토아트"
  },
  {
    img: riding,
    title: "자전거 타기"
  },
  {
    img: selfie,
    title: "셀카 찍기"
  },
  {
    img: solotour,
    title: "나홀로 여행하기"
  },
  {
    img: sports,
    title: "스포츠 활동"
  },
  {
    img: tour,
    title: "여행하기"
  },
  {
    img: waterpaint,
    title: "수체화"
  },
  {
    img: write,
    title: "글 쓰기"
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
  "매력적인"  
]
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
  "헬리더"
]

const compatibility = [
  [3, 3, 3, 4, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 3, 4, 3, 4, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 4, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 3, 3, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0],
  [3, 4, 3, 3, 3, 3, 3, 4, 2, 2, 2, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1],
  [3, 3, 3, 3, 3, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 4],
  [3, 3, 4, 3, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
  [0, 0, 0, 4, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 2, 4],
  [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 4, 2, 4, 2],
  [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 2, 4],
  [0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 4, 2, 2, 2],
  [0, 0, 0, 0, 1, 2, 1, 1, 2, 4, 2, 4, 3, 3, 3, 3],
  [0, 0, 0, 0, 1, 2, 1, 1, 4, 2, 4, 2, 3, 3, 3, 3],
  [0, 0, 0, 0, 1, 2, 1, 1, 2, 4, 2, 2, 3, 3, 3, 3],
  [0, 0, 0, 0, 1, 2, 4, 1, 4, 2, 4, 2, 3, 3, 3, 3],
];

const mbti = [
  "INFP",
  "ENFP",
  "INFJ",
  "ENFJ",
  "INTJ",
  "ENTJ",
  "INTP",
  "ENTP",
  "ISFP",
  "ESFP",
  "ISTP",
  "ESTP",
  "ISFJ",
  "ESFJ",
  "ISTJ",
  "ESTJ",
];

export const Question = [
  { content: "정말 좋아하는 음악이 있나요?", field: "music" },
  { content: "노래를 부르는 것을 좋아하시나요?", field: "music" },
  { content: "미술품을 보면 흥미로운가요?", field: "art" },
  { content: "종이와 펜이 있다면, 낙서를 하시나요?", field: "art" },
  { content: "평소에 요리를 하시나요?", field: "cook" },
  { content: "빵 좋아하시나요?", field: "cook" },

  { content: "사진을 자주 찍으시나요?", field: "picture" },
  { content: "아름다운 풍경에 관심이 있으신가요?", field: "picture" },
  { content: "책 좋아하시나요?", field: "book" },
  { content: "글을 쓸때 재미를 느끼시나요?", field: "book" },
  { content: "여러 지역에 관심이 많으신가요?", field: "trip" },

  { content: "마음속에 가고 싶은 여행지가 있나요?", field: "trip" },
  { content: "당신은 활동적인 사람인가요?", field: "sport" },
  { content: "스포츠 경기를 자주 보시나요?", field: "sport" },
  { content: "창작물을 만드는 것에 관심이 있으신가요?", field: "create" },
  { content: "평소에 자기만의 세계가 확고한가요?", field: "create" },
  
  { content: "남들과는 다른 사람이 되고 싶나요?", field: "create" },
  { content: "사람들과 어울리는 것을 좋아하시나요?", field: "extroversion" },
  { content: "야외 활동을 선호하시나요?", field: "extroversion" },
  { content: "산책하는 것을 즐기시나요?", field: "extroversion" },
];



