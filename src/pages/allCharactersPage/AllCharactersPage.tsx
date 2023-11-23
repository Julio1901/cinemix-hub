import { RickAndMortyCharacterCard } from "../../common/components/RickAndMortyCharacterCard/RickAndMortyCharacterCard"

//TODO Remove this mock
const imageUrl = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"



export const AllCharactersPage = () => {
    return(<>
    <h1>Rick and morty page</h1>
    <RickAndMortyCharacterCard charImageUrl={imageUrl}/>
    </>)


}