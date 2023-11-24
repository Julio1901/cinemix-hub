import { useQuery } from "@apollo/client";
import { RickAndMortyCharacterCard } from "../../common/components/RickAndMortyCharacterCard/RickAndMortyCharacterCard"
import { ApoloClientComponent, GET_DATA } from "../../common/Network/CinemixQuerys";
import { GET_ALL_CHARACTERS } from "../../Characters/Queries/queries";
import { CharactersData } from "../../Characters/Interfaces/CharactersData";
import { Character } from "../../Characters/Interfaces/Character";
import { useEffect, useRef, useState } from "react";
import { AllCharactersList } from "./styles";


export const AllCharactersPage = () => {
    
    const [allCharacters, setAllCharacters] = useState<Character[]>()
    const listRef = useRef<HTMLUListElement | null>(null);

    const { loading, error, data } = useQuery<CharactersData>(GET_ALL_CHARACTERS, { 
        client: ApoloClientComponent,
        variables: {
            pageNumber: 1
        }
    });

    useEffect(() =>{
        console.log('test')
        setAllCharacters(data?.characters.results)
        console.log(data?.characters.results)


    }, [loading])


    const handleScroll = () => {
        const allCharactersList = listRef.current;
      
        if (allCharactersList) {
          const { scrollLeft, scrollWidth, clientWidth } = allCharactersList;
      
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            console.log('A lista foi scrollada até o final!');
            // Dispare aqui a ação que você deseja executar ao chegar no final da lista
          }
        }
      };
      
      useEffect(() => {
        const allCharactersList = listRef.current;
      
        if (allCharactersList) {
          allCharactersList.addEventListener('scroll', handleScroll);
        }
      
        return () => {
          if (allCharactersList) {
            allCharactersList.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);
    
    return(
    
    <div style={{ flexDirection:"column", display:"flex"}}>
        <h1>Rick and morty page</h1>
       <AllCharactersList ref={listRef}>
            { allCharacters?.map( (character, index) => (
                    <RickAndMortyCharacterCard name={character.name} status={character.status} species={character.species} gender={character.gender} charImageUrl={character.image}/>
                ))}
       </AllCharactersList>
    </div>
   
    
    )


}