import { createContext, useContext, useMemo, useRef } from "react";

const ChatContext = createContext();

export const useChatDialog = () => {
	return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
	const dialog = useRef(null);

	const value = useMemo(() => ({ dialog }), [dialog]);

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
