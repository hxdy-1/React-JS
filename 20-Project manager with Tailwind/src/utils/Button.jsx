import React from "react";

const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className="font-bold px-4 py-2 rounded-md text-stone-400 hover:text-stone-100 bg-stone-700 hover:bg-stone-600"
		>
			{children}
		</button>
	);
};

export default Button;
