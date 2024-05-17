import { Link, useParams } from 'react-router-dom'
import useCharacter from './hooks/useCharacter'

function CharacterPage() {
  const {itemId}  = useParams()
  const { characters } = useCharacter(itemId!)

  return (
    <div>
      <Link to="/" className="text-red-300 underline text-4xl cursor-pointer">
          Rick and Morty App
      </Link>
      
      {characters ? [characters].map(item => (
        <div key={item.id} className='items-center justify-center mx-auto'>
          <div className='text-4xl text-center'>{item.name}</div>
          <img src={item.image} alt={item.name}/>
          <div className='flex flex-row gap-3'><span>Status</span> : <p>{item.status}</p></div>
          <div className='flex flex-row gap-3'><span>Species</span> : <p>{item.species}</p></div>
          <div className='flex flex-row gap-3'><span>Gender</span> : <p>{item.gender}</p></div>
          
          
        </div>
      )) : (
        <div className='text-center'>Character data not found!!!</div>
      )}
      </div>
  )
}

export default CharacterPage