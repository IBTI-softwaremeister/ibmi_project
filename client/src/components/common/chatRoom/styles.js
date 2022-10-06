import styled from "styled-components";

export const MainDiv = styled.div`
  width: 1264px;
  height: 113px;
  display: flex;
  align-items: center;
  background-color: #eff6d2;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 27px;
  border-radius: 20px;
  margin-bottom: 28px;
  font-weight: 700;

  span {
    font-size: 30px;
  }

  button {
    border: none;
    outline: none;
    width: 289px;
    height: 68px;
    color: #fff;
    background-color: #32b156;
    font-size: 26.6px;
    font-weight: 700;
    border-radius: 17px;
  }
`;

export const RoomBox = styled.div`
  width: 50vw;
  height: 60vh;
  border-radius: 30px;
  background-color: #b1e5c0;
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
    /* justify-content: space-between; */
    div {
      width: 700px;
      margin-left: 23px;
    }
  }
  .explanation_input label {
    font-size: 20px;
    width: 32px;
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
