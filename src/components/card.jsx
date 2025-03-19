export default function Card({ as: Component = "div", className, children }) {
	return (
		<Component
			className={`bg-blue-1100/20 rounded-lg p-6 text-white shadow-lg ring-1 ring-blue-500/10 ${className}`}
		>
			{children}
		</Component>
	);
}
