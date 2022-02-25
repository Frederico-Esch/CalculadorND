import './App.css';
import MonsterInput from './components/MonsterInput';
import MonsterSelect from './components/MonsterSelect';
import {
  BrowserRouter,
  Routes,
  Link,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
	<header>
	  <nav>
	    <ul>
	      <li>
		<Link to="/">Float Input</Link>
	      </li>
	      <li>
		<Link to="/ms">Monster Select</Link>
	      </li>
	    </ul>
	  </nav>
	</header>

	<div className="Header">
	  <h1>Calculador de ND</h1>
	</div>

	<Routes>

	  <Route exact path="/" element={<MonsterInput/>}/>
	  <Route exact path="/ms" element={<MonsterSelect/>}/>

	</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
