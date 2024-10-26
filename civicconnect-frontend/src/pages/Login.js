import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Logged in successfully:', data);
            } else {
                setMessage('Login failed: ' + data.message);
            }
        } catch (error) {
            setMessage('Login failed: ' + error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, name, address, phone }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage('Registration successful! Please log in.');
                setIsRegistering(false);
            } else {
                setMessage('Registration failed: ' + data.message);
            }
        } catch (error) {
            setMessage('Registration failed: ' + error.message);
        }
    };

    return (
        <div className="login-container">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                {isRegistering && (
                    <>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            {!isRegistering && (
                <p className="register-link">
                    Don't have an account? 
                    <span onClick={() => setIsRegistering(true)} className="link"> Register</span>
                </p>
            )}
        </div>
    );
};

export default Login;
