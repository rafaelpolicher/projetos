import './styles/App.sass';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Container from './components/Container';

const API = "http://localhost:5000"

function App() {
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
