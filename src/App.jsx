import Banner from "./Components/Banner"
import Concept from "./Components/Concept"
import ConnectYourStore from "./Components/ConnectYourStore"
import FinancialGrowth from "./Components/FinancialGrowth"
import Navbar from "./Components/Navbar"
import Perks from "./Components/Perks"
import Review from "./Components/Review"

function App() {

  return (
    <>
    <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Perks></Perks>
           <Concept></Concept>
           <ConnectYourStore></ConnectYourStore>
           <Review></Review>
           <FinancialGrowth></FinancialGrowth>
      </div>
    </>
  )
}

export default App
