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

export const Logo = styled.img`
  width: 131px;
  height: 32px;
  margin-left: 40px;
  margin-top: 40px;
  /* Criar mobile aqui depois  */
`


export const TopIconsContainer = styled.div`
    margin-top: 58px;
    margin-left: 40px;
    flex-direction: column;
    display: flex; 
    gap: 35px;
`

export const MiddleIconsContainer = styled.div`
    margin-top: 121px;
    margin-left: 40px;
    flex-direction: column;
    display: flex; 
    gap: 35px;
`

export const BottomIconsContainer = styled.div`
    margin-top: 200px;
    margin-left: 40px;
    flex-direction: column;
    display: flex; 
    gap: 35px;
`

