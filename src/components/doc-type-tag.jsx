import { classNames } from "@/utils/strings";

export default function DocTypeTag(type) {
	if (!type || !type.type) {
		return;
	}

	const theType = type.type || type;

	const config = {
		name: "Ext",
		className: "bg-gray-500",
	};

	if (theType === "mdx_doc") {
		config.name = "Doc";
		config.className = "bg-teal-800";
	} else if (theType === "post" || theType === "page") {
		config.name = "Blog";
		config.className = "bg-purple-600";
	}

	console.log("DocTypeTag config", theType, config);

	return (
		<span
			className={classNames(
				"mr-2 inline-block px-2 py-1 text-xs font-semibold text-gray-200 uppercase",
				config.className,
			)}
		>
			{config.name}
		</span>
	);
}
