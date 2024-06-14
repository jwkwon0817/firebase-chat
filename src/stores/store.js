import { create } from 'zustand';

export const useUserStore = create((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));

export const useMessagesStore = create((set) => ({
	messages: [],
	setMessages: (messages) => set({ messages }),
}));