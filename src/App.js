import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Andrew">
        <Welcome name="Brus"/>
      </Greet>
      <Message />
      <FunctionClick />
    </div>
  );
}

export default App;
