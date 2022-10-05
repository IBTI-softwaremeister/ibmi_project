import styled from "styled-components";

export const Banner = styled.div`
    width: 100%;
    height: 1100px;
    background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1037' viewBox='0 0 1920 1037' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='1720.05' cy='579.5' rx='344.049' ry='338.5' fill='%23D7ED80'/%3E%3Crect width='2236.43' height='476.255' transform='matrix(0.995681 -0.0928359 -0.0628171 -0.998025 -114.041 510.333)' fill='%2332B156'/%3E%3Cellipse rx='1057.78' ry='104.607' transform='matrix(0.997217 -0.0745585 0.0504076 0.998729 1050.13 421.341)' fill='%2332B156'/%3E%3Cellipse cx='1353.5' cy='820' rx='220.5' ry='217' fill='%23CF8A75' fill-opacity='0.57'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        margin-top: 10%;
        font-size: 72px;
        font-weight: bold;
        color: white;
    }

    p {
        font-size: 24px;
        color: white;
        text-align: center;
    }
`
export const TypeBox = styled.div`
    width: 90%;
    height: 1000px;
    /* background-color: grey; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 7%;
`
export const Type = styled.div`
    width: 350px;
    height: 350px;
    background-color: #BAE9C7;
    border-radius: 35px;
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
        color: black;
    }
`

export const PopupWindow = styled.div`
    width: 50vw;
    height: 60vh;
    background-color: #32B156;
    border-radius: 50px;
    box-shadow: 5px 5px 1000px 1000px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    img {
        width: 200px;
        height: 200px;
        /* background-color: white; */
        border-radius: 50%;
    }

    .Input_box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%;
    }
    .Input_box input {
        width: auto;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 20px;
        font-weight: 700;
        text-align: right;
    }
    .Input_box label {
        color: #E4E2E2;
        font-size: 20px;
    }
    .Input_box span {
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    .Button_box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 85%;
        height: 13%;
    }
    button {
        width: 45%;
        height: 100%;
        background-color: white;
        border-radius: 15px;
        border: none;
        font-size: 20px;
        font-weight: 700;
    }
`