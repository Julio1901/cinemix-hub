import { CharImage, CharName, ImageContainer, MainContainer } from "./styles"

interface IRickAndMortyCharactersCard {
    charImageUrl: string
}


export const RickAndMortyCharacterCard : React.FC<IRickAndMortyCharactersCard> = ({charImageUrl}) => {
    return(
        <>
        <MainContainer>
            <ImageContainer>
                <CharImage src={charImageUrl}/>
            </ImageContainer>
            <CharName>Rick Sanchez</CharName>
           

        </MainContainer>
        </>
    )

}