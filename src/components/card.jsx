export default function Card({ as: Component = "div", className, children }) {
	return (
		<Component
			className={`bg-blue-1100/20 rounded-lg p-6 text-white ring-1 shadow-lg ring-blue-500/10 ${className}`}
		>
			{children}
		</Component>
	);
}
