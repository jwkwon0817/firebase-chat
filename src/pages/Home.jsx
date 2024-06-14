import { Login } from '../components/Login.jsx';
import { useUserStore } from '../stores/store.js';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config.js';
import { Chat } from '../components/Chat.jsx';
import '../styles/global.scss';

export const Home = () => {
	const { user, setUser } = useUserStore((state) => state);

	const signOut = () => {
		auth.signOut()
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		const unsubscript = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscript();
		};
	}, []);

	return (
		<div className={ 'container' }>
			{ user ? <Chat /> : <Login /> }
		</div>
	);
};