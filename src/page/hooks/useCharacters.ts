import { useState } from 'react'
import { useEffect } from 'react'


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

  interface PageData {
    count: number;
    next: string;
    page: number;
    prev: string | null | undefined;
  }

  interface AllDataResults {
    info: PageData;
    results: Characters[]
  }

const useCharacters = (currentPage: number) => {
  
    const [characters, setCharacters] = useState<Characters[]>([])

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
                if(!response.ok){
                    throw new Error("Could not find characters")
                }
            const data:  AllDataResults = await response.json() 
            const items = data.results
            console.log(items)
            setCharacters(items)
        }
        fetchCharacters()
    },[currentPage])


  return {characters}
}

export default useCharacters