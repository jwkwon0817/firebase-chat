import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';
import styles from '../styles/Login.module.scss';

export const Login = () => {
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).catch((error) => console.log(error));
	};

	return (
		<div className={ styles.login }>
			<button onClick={ signInWithGoogle }>Login with Google</button>
		</div>
	);
};