import styled from "styled-components";

export const Join = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  input {
    width: 210px;
    height: 40px;
    margin: 7px;
    border: 2px solid #43a047;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
  }

  button {
    width: 225px;
    height: 50px;
    margin: 7px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background: #43a047;
    color: #fff;
    cursor: pointer;
  }
`;

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
  align-items: center;
  flex-direction: column;
  padding-top: 70px;

  > div {
    text-align: center;
  }

  h1 {
    font-size: 72px;
    color: #fff;
  }
  p {
    margin-top: 20px;
    color: #ebebeb;
    font-size: 24px;
  }
  button {
    margin-top: 23px;
    background-color: #e9d847;
    border-radius: 12px;
    width: 190px;
    height: 50px;
    border: none;
    outline: none;
    font-weight: bold;
  }
`;

export const TipDiv = styled.div`
  width: 1410px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: -80px;
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
  background-image: url("data:image/svg+xml,%3Csvg width='779' height='804' viewBox='0 0 779 804' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='589.5' cy='342.5' rx='346.5' ry='342.5' fill='%2331918B' fill-opacity='0.56'/%3E%3Cellipse cx='220.5' cy='587' rx='220.5' ry='217' fill='%237675CF' fill-opacity='0.57'/%3E%3C/svg%3E%0A");
`;
