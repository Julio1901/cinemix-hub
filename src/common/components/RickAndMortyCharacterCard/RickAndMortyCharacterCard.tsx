import { useRef } from "react";
import { CharImage, CharName, CharPropertiesList, CharPropertiesListItemContainer, CharPropertiesListItemContent, CharPropertiesListItemName, ImageContainer, LeftListButton, ListContainer, MainContainer, RightListButton } from "./styles"

interface IRickAndMortyCharactersCard {
    charImageUrl: string
}


export const RickAndMortyCharacterCard : React.FC<IRickAndMortyCharactersCard> = ({charImageUrl}) => {
    
    const mockItem = {
        name: "Aqua Morty",
        status: "Alive",
        species: "Humanoid",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg"
    }

    const listRef = useRef<HTMLUListElement | null>(null);

    const scrollListToLeft = () => {
        if (listRef.current) {
            listRef.current.scrollLeft -= 100; 
        }
    };

    const scrollListToRight = () => {
        if (listRef.current) {
            listRef.current.scrollLeft += 100; 
        }
    };


    return(
        <>
        <MainContainer>
            <ImageContainer>
                <CharImage src={charImageUrl}/>
            </ImageContainer>
            <CharName>Rick Sanchez</CharName>
            <ListContainer>
            <LeftListButton onClick={scrollListToLeft} />
            <CharPropertiesList ref={listRef}> 
                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Status</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{mockItem.status}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>

                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Species</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{mockItem.species}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>

                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Gender</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{mockItem.gender}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>
            </CharPropertiesList>
            <RightListButton onClick={scrollListToRight}/>
            </ListContainer>
        </MainContainer>
        </>
    )

}