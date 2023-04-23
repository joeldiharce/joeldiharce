import logo from './Assets/fi4oa3o2w7t51.png'
import './App.css';

// START notes file "001_Creating_a_functional_Component.md"
function Header() {
  return <h1 class="App-header">Hello world</h1>
}

function Artpic() {
  return <img src={logo} alt="logo" class="App-logo"></img>
}

function App() {
  return <div class="App App-header"><Artpic /><Header /></div>
}

export default App;

// End notes file "001_Creating_a_functional_Component.md"