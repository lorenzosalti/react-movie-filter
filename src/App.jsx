import movies from './data/movies.json'



function App() {


  return (
    <>
      <h1>Lista dei film</h1>

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
