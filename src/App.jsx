import Banner from "./Components/Banner"
import Concept from "./Components/Concept"
import ConnectYourStore from "./Components/ConnectYourStore"
import Navbar from "./Components/Navbar"
import Perks from "./Components/Perks"

function App() {

  return (
    <>
    <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Perks></Perks>
           <Concept></Concept>
           <ConnectYourStore></ConnectYourStore>
      </div>
    </>
  )
}

export default App
