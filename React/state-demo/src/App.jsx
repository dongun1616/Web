import './App.css'
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

function App() {
  return (
    <>
      {/* <h1>State Demo!</h1> */}
      {/* <EmojiClicker /> */}
      <ScoreKeeper numPlayers={5} target={5} />
      {/* <Dumbo /> */}
      {/* <Counter /> */}
    </>
  )
}

export default App
