import styled from "styled-components";

export const Circle = styled.div`
  width: 931px;
  height: 796px;
  background-repeat: no-repeat;
  position: absolute;
  top: 254px;
  right: -150px;
  z-index: -2;

  animation: moveCircle 1s ease-in-out forwards;
  animation-delay: 0.5s;
  opacity: 0;

  @keyframes moveCircle {
    0% {
      opacity: 1;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
    }
  }

  background-image: url("data:image/svg+xml,%3Csvg width='787' height='796' viewBox='0 0 787 796' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='587.049' cy='338.5' rx='344.049' ry='338.5' fill='%23D7ED80'/%3E%3Cellipse cx='220.5' cy='579' rx='220.5' ry='217' fill='%23CF8A75' fill-opacity='0.57'/%3E%3C/svg%3E%0A");
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 470px;
  background-image: url("data:image/svg+xml,%3Csvg width='1921' height='457' viewBox='0 0 1921 457' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2267.36' height='293.639' transform='matrix(1 0.000511458 0.030618 -0.999531 -187 293.501)' fill='%2332B156'/%3E%3Cellipse rx='1057.78' ry='104.607' transform='matrix(0.997217 -0.0745585 0.0504076 0.998729 1051.13 325.341)' fill='%2332B156'/%3E%3Cpath d='M0.902432 402.002L517.978 401.998L525.016 172.268L0.999962 172L0.902432 402.002Z' fill='%2332B156'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;

  > span {
    margin-top: 5%;
    font-size: 72px;
    /* font-weight: bold; */
    color: white;
  }

  p {
    font-size: 24px;
    color: white;
    text-align: center;
  }

  animation: moveBanner 1s ease-in-out;

  @keyframes moveBanner {
    0% {
      transform: translateY(-150%);
    }
  }
`;

export const TypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -150px;
`;

export const TypeBox = styled.div`
  width: 90%;
  /* background-color: grey; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 3%;
`;
export const Type = styled.div`
  width: 350px;
  height: 300px;
  background-color: #bae9c7;
  border-radius: 12px;
  margin: 30px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    box-shadow: 1px 5px 10px 3px grey;
  }

  span {
    margin-top: 20px;
    color: #000;
  }
`;

export const PopupWindow = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 12px;
  box-shadow: 5px 5px 1000px 1000px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 30px;
    font-weight: 700;
  }

  img {
    width: 70%;
    height: 60%;
    object-fit: cover;
    box-shadow: 1px 5px 20px 10px grey;
  }

  p {
    font-size: 18px;
    width: 70%;
  }
`;
