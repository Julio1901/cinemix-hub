import styled from "styled-components";

export const MainContainer = styled.div`
    //Desk
    width: 274px;
    background-color: #21201E;
    flex-direction: column;

    @media (max-width: 600px) {
        //Mobile
        width: 100%;
        height: 100px;
        flex-direction: row;
        position: fixed;
        bottom: 0;
    }

`
