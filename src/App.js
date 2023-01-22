import logo from './logo.svg';
import './App.css';
import {LogIn} from './components/LoginForm';
import {Navbar} from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LogIn/>
    </div>
  );
}

export default App;
