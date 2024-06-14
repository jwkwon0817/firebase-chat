import { useMessagesStore } from '../stores/store.js';
import { useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { Message } from './Message.jsx';

export const MessageList = () => {
	const { messages, setMessages } = useMessagesStore((state) => state);

	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('datetime', 'asc'));


		const unsubscribe = onSnapshot(q, (snapshot) => {
			const data = snapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});

			setMessages(data);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<>
			{ messages.map((message, index) => (
				<Message key={ index } message={ message } />
			)) }
		</>
	);
};