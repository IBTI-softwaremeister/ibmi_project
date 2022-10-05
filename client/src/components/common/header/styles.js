import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;

    img {
        position: fixed;
        left: 4%;
        font-size: 30px;
        font-weight: bold;
        height: 40px;
    }

    div {
        width: 20%;
        display: flex;
        justify-content: space-between;
        color: grey;
    }
`