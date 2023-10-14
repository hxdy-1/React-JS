import logo from "./logo.svg";
import "./App.css";
import Helloworld from "./components/Helloworld";
import Async from "./components/Async";

function App() {
	return (
		<div className="App">
			<Helloworld />
			<Async />
		</div>
	);
}

export default App;
