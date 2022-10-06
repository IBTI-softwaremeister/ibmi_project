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

  .new_room_button {
    position: absolute;
    right: 100px;
    width: 380px;
    height: 90px;
    border-radius: 30px;
    line-height: 90px;
    text-align: center;
    font-size: 30px;
    background-color: #E0F55D;
  }

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

export const RoomBox = styled.div`
  width: 50vw;
  height: 60vh;
  border-radius: 30px;
  background-color: #B1E5C0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .room_input_box {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    position: relative;
  }
  .room_input_box input {
    width: 600px;
    height: 30px;
    background-color: transparent;
    font-size: 20px;
    border: none;
    border-bottom: 1.5px solid black;
    outline: none;
    margin-left: 3%;
  }
  .room_input_box span {
    /* background-color: white; */
    font-size: 20px;
    margin-left: 3%;
  }
  .room_input_box svg {
    position: absolute;
    right: 0;
  }
  .room_input_box label {
    font-size: 20px;
    width: 50px;
  }
  .explanation_input {
    width: 80%;
    height: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .explanation_input label {
    font-size: 20px;
  }
  .explanation_input textarea {
    width: 600px;
    height: 100%;
    font-size: 20px;
    text-align: start;
    justify-content: start;
    outline: none;
    border: none;
  }
  button {
    width: 600px;
    height: 60px;
    border-radius: 200px;
    border: none;
    margin-left: 7.5%;
    background-color: white;
    font-size: 25px;
  }
`;