import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import MovieView from "./features/movies/MovieView"

function App() {
 

  return (
    <>
      <Header/>
      <main className="container">
        <MovieView/>
      </main>
    </>
  )
}

export default App
