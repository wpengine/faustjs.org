export default function Card({ as: Component = "div", className, children }) {
	return (
		<Component
			className={`rounded-lg bg-blue-1100/20 p-6 text-white shadow-lg ring-1 ring-blue-500/10 ${className}`}
		>
			{children}
		</Component>
	);
}
