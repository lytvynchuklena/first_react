
import './App.css';
import CharacterComponent from "./components/characters/characterComponent";


function App() {
	return (
		<div>
			<CharacterComponent description={'bart'} image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
			<CharacterComponent description={'liza'} image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>


		</div>
	);
}

export default App;
