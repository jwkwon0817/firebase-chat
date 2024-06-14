import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import styles from '../styles/Message.module.scss';
import { MdDelete } from 'react-icons/md';

export const Message = (message) => {
	const { id, content, datetime, username, uid } = message.message;
	const date = new Date(datetime.seconds * 1000);
	const currentUser = auth.currentUser ? auth.currentUser.uid : null;
	const isSentByCurrentUser = uid === currentUser;
	const messageClass = isSentByCurrentUser ? styles.sent : styles.received;

	const handleDelete = async () => {
		if (window.confirm('정말로 이 메시지를 삭제하시겠습니까?')) {
			try {
				await deleteDoc(doc(db, 'messages', id));
			} catch (error) {
				console.error('메시지 삭제 중 오류가 발생했습니다.', error);
			}
		}
	};

	return (
		<div className={ `${ styles.message } ${ messageClass }` }>
			<div className={ styles.header }>
				<span>{ username }</span>
				<span className={ styles.time }>{ date.toLocaleTimeString() }</span>
			</div>
			<div className={ styles.content }>{ content }</div>
			{ isSentByCurrentUser && (
				<button className={ styles.deleteButton } onClick={ handleDelete }>
					<MdDelete />
				</button>
			) }
		</div>
	);
};
