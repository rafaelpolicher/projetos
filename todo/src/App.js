import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

const API = "http://localhost:5000"

function App() {
  return (
    <div className="App">
      <Title/>
      <Form />
      <List />
    </div>
  );
}

export default App;
