import './App.css';
import Chicken from "./Chicken";
import Greeter from './Greeter';
import Die from './Die';

function App() {
  return (
    <div>
      <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" />
      <Greeter from="Elton" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
    </div>
  );
}

export default App
