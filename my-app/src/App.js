import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";


function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Saki" age="22" />
    </div>
  );
}

export default App;
