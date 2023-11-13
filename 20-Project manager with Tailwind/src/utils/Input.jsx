import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
	const classes =
		"w-full border-b-2 p-1 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus: outline-none focus:border-stone-600";
	return (
		<p className="flex flex-col my-4 gap-4">
			<label className="text-stone-500 font-bold text-sm uppercase">
				{label}
			</label>
			{textArea ? (
				<textarea ref={ref} className={classes} {...props} />
			) : (
				<input ref={ref} className={classes} {...props} />
			)}
		</p>
	);
});

export default Input;
