import { FormEvent, useContext, useState } from 'react'
import { UserContext } from '../context/userContext';

export default function Login() {
    const { user, login } = useContext<any>(UserContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function loginUser(event: FormEvent) {
        event.preventDefault();
        let u = await login(email, password);
        console.log(u)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
