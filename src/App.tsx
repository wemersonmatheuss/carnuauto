import { Main } from "./Components/Main"
import { Videoo } from "./Components/Video"
import { Destak } from "./Components/Destak"
import { Auctions } from "./Components/Auctions"
import { ForYou } from "./Components/ForYou"

export function App() {
  return (
    <div>
      <Main/>
      <Videoo/>
      <Destak/>
      <Auctions/>
      <ForYou/>
    </div>
  )
}