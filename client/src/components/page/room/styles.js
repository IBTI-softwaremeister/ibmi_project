import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 450px;
  margin-top: -4px;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='447' viewBox='0 0 1920 447' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1937.17' height='209.871' transform='matrix(0.999999 0.00133978 0.0314459 -0.999505 -15.0801 211.929)' fill='%2332B156'/%3E%3Cpath d='M1952.03 130.152C1970.53 328.211 1647.08 353.631 1045.48 424.563C443.889 495.496 -58.8012 392.439 -77.3073 194.38C-95.8135 -3.67865 420.225 142.873 1021.82 71.9406C1623.41 1.00822 1933.52 -67.9068 1952.03 130.152Z' fill='%2332B156'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  padding-top: 70px;
  box-sizing: border-box;
  margin-bottom: 82px;

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
  }
  p {
    margin-top: 0px;
    color: #ebebeb;
    font-size: 24px;
  }
`;

export const ContainerRoom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
