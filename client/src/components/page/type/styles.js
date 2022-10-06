import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100vw;
  background-image: url("data:image/svg+xml,%3Csvg width='1921' height='457' viewBox='0 0 1921 457' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2267.36' height='293.639' transform='matrix(1 0.000511458 0.030618 -0.999531 -187 293.501)' fill='%2332B156'/%3E%3Cellipse rx='1057.78' ry='104.607' transform='matrix(0.997217 -0.0745585 0.0504076 0.998729 1051.13 325.341)' fill='%2332B156'/%3E%3Cpath d='M0.902432 402.002L517.978 401.998L525.016 172.268L0.999962 172L0.902432 402.002Z' fill='%2332B156'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin-top: 10%;
    font-size: 72px;
    /* font-weight: bold; */
    color: white;
  }

  p {
    font-size: 24px;
    color: white;
    text-align: center;
  }
`;

export const TypeBox = styled.div`
  width: 90%;
  height: 1000px;
  /* background-color: grey; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 7%;
`;
export const Type = styled.div`
  width: 350px;
  height: 250px;
  background-color: #bae9c7;
  /* border-radius: 35px; */
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
    /* margin-top: 20px; */
    color: black;
  }
`;

export const PopupWindow = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 50px;
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
  }
`;
