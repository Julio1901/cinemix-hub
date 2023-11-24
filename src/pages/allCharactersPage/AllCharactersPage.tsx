import { useQuery } from "@apollo/client";
import { RickAndMortyCharacterCard } from "../../common/components/RickAndMortyCharacterCard/RickAndMortyCharacterCard"
import { ApoloClientComponent, GET_DATA } from "../../common/Network/CinemixQuerys";
import { GET_ALL_CHARACTERS } from "../../Characters/Queries/queries";
import { CharactersData } from "../../Characters/Interfaces/CharactersData";
import { Character } from "../../Characters/Interfaces/Character";
import { useEffect, useState } from "react";
import { AllCharactersList } from "./styles";


export const AllCharactersPage = () => {
    
    const [allCharacters, setAllCharacters] = useState<Character[]>()

    const { loading, error, data } = useQuery<CharactersData>(GET_ALL_CHARACTERS, { client: ApoloClientComponent });

    useEffect(() =>{
        console.log('test')
        setAllCharacters(data?.characters.results)
        console.log(data?.characters.results)


    }, [loading])
    
    return(
    
    <div style={{ flexDirection:"column", display:"flex"}}>
        <h1>Rick and morty page</h1>
       <AllCharactersList>
            { allCharacters?.map( (character, index) => (
                    <RickAndMortyCharacterCard name={character.name} status={character.status} species={character.species} gender={character.gender} charImageUrl={character.image}/>
                ))}
       </AllCharactersList>
    </div>
   
    
    )


}