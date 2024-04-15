"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";


export default function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState('')

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        }
        else {
            setError(true);
        }
        setCreatingUser(false);
    }
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            {userCreated && (
                <div className="my-4 text-center">
                    User created successfully <br />
                    Now you can{' '}
                    <Link className="underline text-blue-500" href={'/login'}>Login &raquo;</Link>
                </div>
            )}

            {error && (
                <div className="my-4 text-center">
                    Error!! <br />
                    Please try again
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" disabled={creatingUser} placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" disabled={creatingUser} placeholder="password" value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type="submit" disabled={creatingUser}>Register</button>
                <div className="my-4 text-center text-gray-500">
                    or Login with provider
                </div>
                <button  type="button" onClick={()=>signIn('google',{callbackUrl:'/'})}  className="flex gap-4 justify-center">
                    <img src={'/google.png'} alt='' width={24} height={24} />
                    Login with google</button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline text-blue-500" href={'/login'}>Login &raquo;</Link>
                </div>
            </form>
        </section>
    );
}