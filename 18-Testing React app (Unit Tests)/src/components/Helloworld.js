import React, { useState } from "react";

const Helloworld = () => {
	const [changedText, setChangedText] = useState(false);

	const textChangeHandler = () => {
		setChangedText(true);
	};

	return (
		<>
			<div>Helloworld</div>
			{!changedText && <p>It's good to see you!</p>}
			{changedText && <p>Changed!</p>}
			<button onClick={textChangeHandler}>Change text</button>
		</>
	);
};

export default Helloworld;
