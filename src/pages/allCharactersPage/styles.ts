import styled from "styled-components";

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
`

export const AllCharactersList = styled.ul`
  width: 100%;
  height: fit-content;
  background-color: beige;
  list-style: none;
  padding: 0;
  max-height: 700px; 
  overflow-y: hidden; /* Esconda a barra de rolagem vertical */
  overflow-x: auto; /* Ative a barra de rolagem horizontal */
  border: 1px solid #ccc; 
  display: flex;
  flex-direction: row;
  gap: 10px; /* Adiciona espaço de 10px entre os elementos */
`;

