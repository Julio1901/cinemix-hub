import styled from "styled-components";

export const MainContainer = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: #35c9dd;
    border: 4px solid #17ff39;

    @media (max-width: 600px) {
        width: 200px;
        height: 250px;

    }
`

export const ImageContainer = styled.div`
     width: 100%;
     height: fit-content;
     margin-top: 30px;
     flex-direction: row;
     display: flex;
     justify-content: center;
`

export const CharImage = styled.img`
        width: 180px;
        height: 180px;
        display: flex;
        border-radius: 90px;
    

        @media (max-width: 600px) {
            width: 150px;
            height: 150px;
            border-radius: 70px;

    }
`

export const CharName = styled.text`
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Josefin+Sans&family=Poppins&display=swap');
    font-size: 30px;
    font-family: 'Creepster', cursive;
    display: flex;
    align-self: center;
`