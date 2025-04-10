// data
import dataMovies from './data/movies.json'

// hooks
import { useEffect, useState } from 'react'


function App() {

  const [movies, setMovies] = useState(dataMovies)

  const [selectGenre, setSelectGenre] = useState('')

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

      <select value={selectGenre} onChange={e => setSelectGenre(e.target.value)}>
        <option value=''>---</option>
        <option>Fantascienza</option>
        <option>Thriller</option>
        <option>Romantico</option>
        <option>Azione</option>
      </select>

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
