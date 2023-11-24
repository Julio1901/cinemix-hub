import { useRef } from "react";
import { CharImage, CharName, CharPropertiesList, CharPropertiesListItemContainer, CharPropertiesListItemContent, CharPropertiesListItemName, ImageContainer, LeftListButton, ListContainer, MainContainer, RightListButton } from "./styles"
import { TextFormatter } from "../../utils/TextFormatter";

interface IRickAndMortyCharactersCard {
    name: string,
    status: string,
    species: string,
    gender: string
    charImageUrl: string
}


export const RickAndMortyCharacterCard : React.FC<IRickAndMortyCharactersCard> = ({name, status, species, gender, charImageUrl}) => {

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

    const MAX_CHARACTER_NAME_SIZE_DESKTOP = 15

    return(
        <>
        <MainContainer>
            <ImageContainer>
                <CharImage src={charImageUrl}/>
            </ImageContainer>
            <CharName>{TextFormatter.handleWithLargeTextNameDisplay(name, MAX_CHARACTER_NAME_SIZE_DESKTOP)}</CharName>
            <ListContainer>
            <LeftListButton onClick={scrollListToLeft} />
            <CharPropertiesList ref={listRef}> 
                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Status</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{status}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>

                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Species</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{species}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>

                <CharPropertiesListItemContainer>
                    <CharPropertiesListItemName>Gender</CharPropertiesListItemName>
                    <CharPropertiesListItemContent>{gender}</CharPropertiesListItemContent>
                </CharPropertiesListItemContainer>
            </CharPropertiesList>
            <RightListButton onClick={scrollListToRight}/>
            </ListContainer>
        </MainContainer>
        </>
    )

}