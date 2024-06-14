import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import styles from '../styles/Chat.module.scss';
import { MessageList } from './MessageList.jsx';
import { IoLogOutSharp, IoSend } from 'react-icons/io5';

export const Chat = () => {
	const [ text, setText ] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();
		if (text.trim()) {
			await addDoc(collection(db, 'messages'), {
				content: text,
				username: auth.currentUser.displayName,
				uid: auth.currentUser.uid,
				datetime: new Date(),
			});
			setText('');
		}
	};

	const handleLogout = async () => {
		await auth.signOut();
	};

	return (
		<div className={ styles.chat }>
			<div className={ styles.header }>
				<h2>Chat</h2>
				<div>
					<span>{ auth.currentUser.displayName }</span>
					<button className={ styles.logoutButton } onClick={ handleLogout }><IoLogOutSharp /></button>
				</div>
			</div>
			<div className={ styles.messageList }>
				<MessageList />
			</div>
			<form className={ styles.inputArea } onSubmit={ sendMessage }>
				<input
					type="text"
					value={ text }
					onChange={ (e) => setText(e.target.value) }
					placeholder="Type your message..."
				/>
				<button type="submit"><IoSend /></button>
			</form>
		</div>
	);
};