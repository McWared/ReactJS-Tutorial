import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Andrew">
        <Welcome name="Brus"/>
      </Greet>
      <Message />
    </div>
  );
}

export default App;
