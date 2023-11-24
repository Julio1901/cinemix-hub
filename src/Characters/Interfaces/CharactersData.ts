import { Character } from "./Character";

export interface CharactersData {

    characters: {
      info: {
        count: number;
        next: number | null;
        prev: number | null;
      };
      results: Character[];
    };
 
}