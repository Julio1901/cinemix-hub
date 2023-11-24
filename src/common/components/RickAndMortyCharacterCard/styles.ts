import styled from "styled-components";
import LeftArrowIcon from "../../../assets/icons/icon_left_arrow.png"
import RightArrowIcon from "../../../assets/icons/icon_right_arrow.png"


export const MainContainer = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: #35c9dd;
    border: 4px solid #231942;

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
    height: fit-content;
    font-size: 30px;
    font-family: 'Creepster', cursive;
    display: flex;
    align-self: center;
    color: #B8336A;
`

export const CharPropertiesList = styled.ul`
    max-width: 100%; 
    margin-top: 0px;
    display: flex;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    list-style: none;
    padding-left: 5px; 
`

export const ListContainer = styled.div`
    width: 230px;
    height: fit-content;
    display: flex;
    align-self: center;
    flex-direction: row;
    background-color: #8A89C0;
    
    border-radius: 15px;
`     

export const CharPropertiesListItemContainer = styled.text`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    margin-right: 25px;
`

export const CharPropertiesListItemName = styled.text`
    font-size: 20px;
    color: #17FF39;
`

export const CharPropertiesListItemContent = styled.text`
    font-size: 20px;
    color: #17FF39;
`
export const LeftListButton = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 5px;
    border: none;
    display: flex;
    background-image: url(${LeftArrowIcon});
    background-size: contain; /* Ajuste conforme necessário */
    background-repeat: no-repeat;
    background-color: transparent;
`

export const RightListButton = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
    border: none;
    display: flex;
    background-image: url(${RightArrowIcon});
    background-size: contain; /* Ajuste conforme necessário */
    background-repeat: no-repeat;
    background-color: transparent;
`;