import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import Popular from "./components/Popular"

import "./style/landingPage.css"
import { searchMovie } from "./api"



function App() {
  const App = () => {
    const search = (q) => {
      console.log({ q })
    }
  }
  const search = async (q) => {
    const query = await searchMovie(q)
    console.log ({query: query})
  }
  return (
    <div>
      <div className="myBG">
      <input placeholder="" 
        className="Movie-search" 
        onChange={({ target }) => search (target.value)}
        />
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>
     
    </div>
    
  )
}

export default App
