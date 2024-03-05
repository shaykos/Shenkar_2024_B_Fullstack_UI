import { useFormik } from "formik";
import { User } from "./types/userType";

export default function App() {
    /*
      [v] username -> up to 60 chars. only English letters 
      [v] email -> ends with .com only
      [v] password -> between 7 and 12 chars.  
    */

    function validate(values: User) {
        const errors: any = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!values.email.endsWith(".com")) {
            errors.email = 'Only .com emails';
        }

        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length > 60) {
            errors.username = 'Must be 60 characters or less';
        } else if (!/[A-Za-z]/.test(values.username)) {
            errors.username = 'only English letters';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 7 || values.password.length > 12) {
            errors.password = 'between 7 and 12 chars';
        }

        return errors;
    }

    const loginForm = useFormik<User>({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <>
            <form onSubmit={loginForm.handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input value={loginForm.values.username} onChange={loginForm.handleChange} id="username" type="text" placeholder="username" required />
                    {loginForm.errors.username && <p>{loginForm.errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input value={loginForm.values.email} onChange={loginForm.handleChange} id="email" type="email" placeholder="email" required />
                    {loginForm.errors.email && <p>{loginForm.errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input value={loginForm.values.password} onChange={loginForm.handleChange} id="password" type="password" placeholder="password" required />
                    {loginForm.errors.password && <p>{loginForm.errors.password}</p>}
                </div>
                <button type="submit">Login Formik</button>
            </form>
        </>
    )
}
