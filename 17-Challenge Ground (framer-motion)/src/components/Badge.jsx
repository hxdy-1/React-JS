import { motion } from "framer-motion";

export default function Badge({ caption }) {
	return (
		<motion.span
			animate={{ scale: [1.1, 1] }}
			transition={{ type: "spring", delay: 0.02 }}
			className="badge"
		>
			{caption}
		</motion.span>
	);
}
