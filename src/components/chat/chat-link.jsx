import Link from "@/components/link";
import { sendSelectItemEvent } from "@/lib/analytics.mjs";

export default function ChatLink(props) {
	return (
		<Link
			{...props}
			onClick={() => {
				sendSelectItemEvent({
					list: { name: "Chat Messages", id: "chat-messages" },
					item: {
						item_id: props.href,
						item_name: props.children,
					},
				});
			}}
		/>
	);
}
