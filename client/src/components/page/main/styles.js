import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='474' viewBox='0 0 1920 474' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1921.14' height='422.688' transform='matrix(1 0 0.000998345 0.999999 -0.676514 0.424805)' fill='%2332B156'/%3E%3Cpath d='M1931 426.585C1931 453.923 1498.73 474 965.5 474C432.269 474 0 446.936 0 419.598C0 392.26 432.269 375 965.5 375C1498.73 375 1931 399.247 1931 426.585Z' fill='%2332B156'/%3E%3C/svg%3E%0A");
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  /* z-index: -1; */

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    margin-top: -10px;
    font-size: 72px;
    color: #fff;
    font-weight: 500;
  }
  p {
    margin-top: 0px;
    color: #ebebeb;
    font-size: 24px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
    background-color: #e9d847;
    border-radius: 12px;
    width: 190px;
    height: 50px;
    border: none;
    outline: none;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    transition: all 0.2s ease;
  }

  a:hover {
    transform: translate3d(0, 10%, 0);
  }

  a:active {
    transform: translate3d(0, 20%, 0);
  }

  animation: moveBanner 1s ease-in-out;

  @keyframes moveBanner {
    0% {
      transform: translateY(-150%);
    }
  }
`;

export const TipDiv = styled.div`
  width: 1410px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: -80px;
  margin-bottom: 117px;
  z-index: 2;

  div {
    text-align: center;
    width: 400px;
    height: 292px;
    border-radius: 24px;
    padding-top: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  p {
    margin-top: 30px;
    width: 300px;
    white-space: pre-wrap;
    font-size: 20px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 465px;
  right: 0;
  width: 780px;
  height: 804px;
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg width='779' height='804' viewBox='0 0 779 804' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='589.5' cy='342.5' rx='346.5' ry='342.5' fill='%2331918B' fill-opacity='0.56'/%3E%3Cellipse cx='220.5' cy='587' rx='220.5' ry='217' fill='%237675CF' fill-opacity='0.57'/%3E%3C/svg%3E%0A");

  animation: moveCircle 1s ease-in-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
  z-index: -1;

  @keyframes moveCircle {
    0% {
      opacity: 1;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Btn = styled.div`
  margin-top: 93px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 136px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 359px;
    height: 132px;
    border-radius: 100px;
    outline: none;
    border: none;
    font-size: 44px;
    color: #fff;
    background-color: #32b156;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  a:hover {
    transform: translate3d(0, 10%, 0);
  }

  a:active {
    transform: translate3d(0, 20%, 0);
  }
`;

export const ModalDiv = styled.div`
  width: 997px;
  height: 684px;
  background-color: #eaebea;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 5px 5px 100vw 100vh rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 40px;
    color: #32b156;
  }
  img {
    width: 600px;
    height: 400px;
    object-fit: cover;
  }
  p {
    width: 580px;
    margin-top: 20px;
  }
  button {
    width: 300px;
    height: 60px;
    outline: none;
    border: none;
    background-color: #32b156;
    color: #fff;
    border-radius: 12px;
    font-size: 20px;
  }
`;
