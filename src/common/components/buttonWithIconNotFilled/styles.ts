import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    cursor: pointer
`

export const ButtonIcon = styled.img`
    display: flex;
    width: 24px;
    height: 24px;
    

    @media (max-width: 600px) {
        display: flex;
        width: 24px;
        height: 24px;
    }
`

export const ButtonTitle = styled.text`
    font-size: 16px;
    color: white;
    margin-left: 12px;
    align-self: center;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`