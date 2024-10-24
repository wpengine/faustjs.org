function append(accumulator, argument) {
	return accumulator + argument + " ";
}

export function classNames(...arguments_) {
	let classes = "";

	for (const argument of arguments_) {
		if (!argument) continue;
		const argumentType = typeof argument;
		if (argumentType === "string" || argumentType === "number") {
			classes = append(classes, argument);
		} else if (Array.isArray(argument) && argument.length > 0) {
			const inner = classNames(...argument);
			if (inner) classes = append(classes, inner);
		} else if (argumentType === "object") {
			for (const [key, value] of Object.entries(argument)) {
				if (value) classes = append(classes, key);
			}
		}
	}

	return classes;
}
