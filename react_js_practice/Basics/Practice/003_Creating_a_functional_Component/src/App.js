import logo from './Assets/fi4oa3o2w7t51.png'
import './App.css';

// START notes file "001_Creating_a_functional_Component.md"
function Header() {
  return <h1 class="App-header">Hello world</h1>                  // We created the component, but we didn't render it. (#RC)
}

function Artpic() {
  return <img src={logo} alt="logo" class="App-logo"></img>       // Not part of the lesson
}

function App() {
  return <div class="App App-header"><Artpic /><Header /></div>   // We rendered the component (#RC)
}

export default App;

// End notes file "001_Creating_a_functional_Component.md"