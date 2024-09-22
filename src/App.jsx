import Banner from "./Components/Banner"
import Concept from "./Components/Concept"
import ConnectYourStore from "./Components/ConnectYourStore"
import FinancialGrowth from "./Components/FinancialGrowth"
import Navbar from "./Components/Navbar"
import Perks from "./Components/Perks"
import Review from "./Components/Review"
import SocialSection from "./Components/SocialSection"

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
           <SocialSection></SocialSection>
      </div>
    </>
  )
}

export default App
