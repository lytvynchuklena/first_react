import './characterComponent.css';

function CharacterComponent(props) {
	console.log(props);
	// let cls = '';
	// if (props.description === 'liza') {
	// 	cls = 'liza-class'
	// }else {
	// 	cls = 'bart-class';
	// }
	let cls = props.description === 'liza' ? 'liza-class' : 'bart-class';
	return <div className={cls}>
		<h2>
			{props.description}
		</h2>
		<img
			src={props.image}
			alt=""/>
	</div>
}

export default CharacterComponent;