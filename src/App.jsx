// data
import dataMovies from './data/movies.json'

// hooks
import { useEffect, useState } from 'react'


function App() {

  const [movies, setMovies] = useState(dataMovies)

  const [filter, setFilter] = useState(false)

  useEffect(() => {
    console.log('componente montato')

    let filteredMovies = movies

    if (filter) {
      filteredMovies = filteredMovies.filter(movie => movie.genre === "Azione")
    }

    setMovies(filteredMovies)

  }, [filter])


  return (
    <>
      <h1>Lista dei film</h1>

      <button onClick={() => setFilter(prev => !prev)}>filtra</button>

      <ul>
        {movies.map((movie, i) => <li key={i}>
          <h3>{movie.title}</h3>
          <h5>Genere: {movie.genre}</h5>
        </li>)}
      </ul>
    </>
  )
}

export default App
