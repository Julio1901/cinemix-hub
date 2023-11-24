
import { GET_DATA } from "../../common/Network/CinemixQuerys";
import { LateralMenu } from "../../common/components/lateralMenu/lateralMenu"
import { MainContainer, PreviewMovieImage, PreviewContainer, TopPreviewContentContainer, TopPreviewTexts } from "./styles"
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import { ApoloClientComponent } from "../../common/Network/CinemixQuerys";

export const InitialPage = () => {

    const previewMovieImage = require('../../assets/images/home-img-retangle-purple.png')
   
    return ( 
        <MainContainer>
              <LateralMenu/>
              <PreviewContainer>
                <PreviewMovieImage src={previewMovieImage}/>
                <TopPreviewContentContainer> 
                  <TopPreviewTexts onClick={() => {  console.log('Movies')}}>
                    Movies
                  </TopPreviewTexts>
                   <TopPreviewTexts>
                    Series
                  </TopPreviewTexts> 
                  <TopPreviewTexts>
                    Documentaries
                  </TopPreviewTexts>

                </TopPreviewContentContainer>
              </PreviewContainer>
             
        </MainContainer>
      
    )
}