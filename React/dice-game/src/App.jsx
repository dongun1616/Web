import LuckyN from "./LuckyN"
import "./App.css"

function App() {
  return (
    <>
      <LuckyN />
      <LuckyN numDice={3} goal={11} />
    </>
  )
}

export default App
