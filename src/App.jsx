// data
import dataMovies from './data/movies.json'

// hooks
import { useEffect, useState } from 'react'


// App component
function App() {

  // state variables
  const [movies, setMovies] = useState(dataMovies)
  const [selectGenre, setSelectGenre] = useState('')

  // side effect function
  useEffect(() => {

    let filteredMovies = dataMovies

    if (selectGenre !== '') {
      filteredMovies = filteredMovies.filter(movie => movie.genre === selectGenre)
    }

    setMovies(filteredMovies)

  }, [selectGenre])


  return (
    <>
      <h1>Lista dei film</h1>

      <h3>Seleziona il genere desiderato</h3>
      <select value={selectGenre} onChange={e => setSelectGenre(e.target.value)}>
        <option value=''>---</option>
        <option>Fantascienza</option>
        <option>Thriller</option>
        <option>Romantico</option>
        <option>Azione</option>
      </select>

      <hr />

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
