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
    const [paginationNumber, setPaginationNumber] = useState(1)
    const listRef = useRef<HTMLUListElement | null>(null);
    const [lastScrollLeft, setLastScrollLeft] = useState(0);
    const isFirstRender = useRef(true)

    const { loading, error, data, refetch } = useQuery<CharactersData>(GET_ALL_CHARACTERS, { 
        client: ApoloClientComponent,
        variables: {
            pageNumber: paginationNumber
        }
    }, )


    useEffect(() =>{
        if (data) {

            const characters = data.characters.results
            
            if(allCharacters) {
                setAllCharacters(allCharacters.concat(characters))
            } else {
                setAllCharacters(characters)
            }

           
        }
    }, [data])

    const paginate = () => { 
        console.log('Paginou');
        if(data?.characters.info.next){
            setPaginationNumber(data.characters.info.next)
            refetch({ pageNumber: data.characters.info.next });
        }
       
    }

    const handleScroll = () => {
      const allCharactersList = listRef.current;
  
      if (allCharactersList) {
        const { scrollLeft, scrollWidth, clientWidth } = allCharactersList;
  
        if (scrollLeft > lastScrollLeft && scrollLeft + clientWidth >= scrollWidth - 10) {
          console.log('A lista foi scrollada até o final!');
          paginate();
        }
  
        setLastScrollLeft(scrollLeft);
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
    }, [lastScrollLeft]);
    
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