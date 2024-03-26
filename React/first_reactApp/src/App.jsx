import './App.css';
import Chicken from "./Chicken";
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slot from './Slots';

function App() {
  return (
    <div>
      <Heading color='magenta' text="welcome!" fontSize="50px" />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <Slot val1="🍌" val2="🍌" val3="🍌" />
      <Slot val1="🍌" val2="🍒" val3="🍌" />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} />
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" />
      <Greeter from="Elton" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App
