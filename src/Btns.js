import { useState, useEffect } from 'react';

function Btns({ frame, len, prev, next }) {
	let [Num, setNum] = useState(0);

	const moveCard = (num) => {
		setNum(num);
		frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
	};

	useEffect(() => {
		console.log(Num);
	}, [Num]);

	return (
		<>
			<button
				className='prev'
				onClick={() => {
					moveCard(++Num);
					prev();
				}}
			>
				PREV
			</button>
			<button
				className='next'
				onClick={() => {
					moveCard(--Num);
					next();
				}}
			>
				NEXT
			</button>
		</>
	);
}

export default Btns;
