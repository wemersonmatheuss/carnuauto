import { Main } from "./Components/Main"
import { Video } from "./Components/Video"
import { Destak } from "./Components/Destak"
import { Auctions } from "./Components/Auctions"
import { ForYou } from "./Components/ForYou"
import { Life } from "./Components/Life"
import { AboutCarnu } from "./Components/AboutCarnu"
import { Price } from "./Components/Price"
import { AboutPerson } from "./Components/AbouPerson"
import { Questions } from "./Components/Questions"
import { Footer } from "./Components/Footer"

export function App() {
  return (
    <div>
      <Main/>
      <Video/>
      <Destak/>
      <Auctions/>
      <ForYou/>
      <Life/>
      <AboutCarnu/>
      <Price/>
      <AboutPerson/>
      <Questions/>
      <Footer/>
    </div>
  )
}