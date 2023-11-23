import styled from "styled-components";



export const MainContainer = styled.div`
  width: 100%;
  height: 100vh; 
  display: flex;
  
  @media (max-width: 600px) {
  
  }
`

export const PreviewContainer = styled.div`
  width: 100%;
  height: 455px;
  background-color: black;
`

export const PreviewMovieImage = styled.img`
  width: 100%;
  height: 455px;
  object-fit: cover;
`

export const TopPreviewContentContainer = styled.div`
  width: 294px;
  height: 30px;
  display: flex;
  top: 0;
  margin-top: 40px;
  margin-left: 32px;
  flex-direction: row;
  position: absolute;
`

export const TopPreviewTexts = styled.text`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  font-size: 16px;
  margin-left: 32px;
  font-family: 'Poppins', sans-serif;
  color: white;
`