import { useState, useEffect } from "react";

enum Status{
    Alive= 'Alive',
    Dead= 'Dead',
    Unknown= 'unknown'
  }
  
  enum Species{
    Human= 'Human',
    Alien= 'Alien'
  }
  
  enum Gender{
    Male= 'Male',
    Female= 'Female',
    Unknown = 'unknown'
  }
  
  interface Location{
    name: string,
    url: string
  }
  
  interface Origin{
    name: string,
    url: string
  }
  
  interface Characters {
    id: string ;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  // interface PageData {
  //   count: number;
  //   next: string;
  //   page: number;
  //   prev: string | null | undefined;
  // }

  // interface AllDataResults {
  //   info: PageData;
  //   results: Characters[]
  // }

const useCharacter = (id: string) => {

    const [characters, setCharacters] = useState<Characters>()

    useEffect(() => {
      if(id === undefined){
        return setCharacters(characters)
      }
        const fetchCharacter = async () => {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                if(!response.ok){
                    throw new Error("Could not find characters")
                }
            const data = (await response.json())
            const items = data
            setCharacters(items)
        }
        fetchCharacter()
    }, [id])  


  return {characters}
}

export default useCharacter