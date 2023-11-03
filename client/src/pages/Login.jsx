import React, { useState } from 'react';
import { useAuth } from '../hooks/auth'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const handleRegister = (e) => {
        // You can add your authentication logic here.
        e.preventDefault()
        console.log(
            email,
            password
        )

        login(email, password)
    };


    return (
        <div className="w-1/4 mx-auto mt-8 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">
                    email:
                </label>
                <input
                    type="text"
                    id="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                    Password:
                </label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <button
                onClick={handleRegister}
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                handleRegister
            </button>
        </div>
    );
}

export default LoginForm;
