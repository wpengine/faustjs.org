import { sendGAEvent } from "@next/third-parties/google";

export function sendSearchEvent(term) {
	sendGAEvent("event", "search", {
		search_term: term,
	});
}

export function sendSelectItemEvent({ list: { name, id }, item }) {
	sendGAEvent("event", "select_item", {
		item_list_id: id,
		item_list_name: name,
		item: [item],
	});
}
