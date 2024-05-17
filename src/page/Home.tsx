import { Link } from "react-router-dom";
import useCharacters from "./hooks/useCharacters";
import { useContext } from 'react'
import PageContext from "./lib/PageContext";

const Home = () => {
  const {currentPage, setCurrentPage} = useContext(PageContext)
    const { characters } = useCharacters(currentPage)

    function handlePrev(){
      setCurrentPage(currentPage > 1 ? currentPage -1 : currentPage)
    }

    function handleNext(){
      setCurrentPage(currentPage != 100 ? currentPage + 1 : currentPage)
    }

  return (  
    <div>
      <Link to="/" className="text-red-300 underline text-4xl cursor-pointer">
          Rick and Morty App
      </Link>
        {characters.map((item) => (
          <p key={item.id} className="border border-b">
            <img src={item.image} alt={item.name}/>
            <Link to={`/character/${item.id}`}>{item.name}</Link>
          </p>
        ))}

        <section className="flex flex-row gap-3 justify-center items-center">
          <p onClick={handlePrev} className="rounded-full p-2 cursor-pointer hover:bg-red-300">Prev</p>
          <p>{currentPage}</p>
          <p onClick={handleNext} className="rounded-full p-2 cursor-pointer hover:bg-red-300">Next</p>
        </section>
    </div>
  )
}

export default Home