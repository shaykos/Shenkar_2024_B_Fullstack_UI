import { FormEvent, useState } from "react"

export default function App_OLD() {
  /*
    username -> up to 60 chars. only English letters 
    email -> ends with .com only
    password -> between 7 and 12 chars.  
  */

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [usernameValid, setUsernameValid] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(true);

  function Login(event: FormEvent) {
    event.preventDefault();
    // validateEmail();
    // validateUsername();
    // validatePassword();
  }

  return (
    <>
      <form onSubmit={Login}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" type="text" placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)} />
          {!usernameValid && <p>Invalid username</p>}
          {/* {!usernameValid ? <p>Invalid username</p> : null} */}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input id="email" type="email" placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          {!emailValid && <p>Invalid email</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          {!passwordValid && <p>Invalid password</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
