import Car from "./components/Car";

export default function App() {
	return (
		<div>
			<Car
				model={'subaru'}
				description={'legacy ez'}
				power={256}
				volume={3}
			/>
			<Car
				model={'bmw'}
				description={'i5 electro car'}
				power={452}
				volume={0}
			/>
		</div>
	);
}

