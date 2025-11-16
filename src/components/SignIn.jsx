import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../Config/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation(); // get state from redirect
  const [isLogin, setIsLogin] = useState(false); // default to signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Show redirect message from cart
  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location.state]);

  const handleEmailAuth = async () => {
    setError('');
    setMessage('');
    if (!email || !password || (!isLogin && !name)) {
      setError("Please fill all required fields");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError("We couldn't find an account with that email. Please sign up first.");
      } else if (err.code === 'auth/wrong-password') {
        setError("Incorrect password. Please try again.");
      } else if (err.code === 'auth/email-already-in-use') {
        setError("This email is already registered. Try logging in instead.");
      } else if (err.code === 'auth/invalid-email') {
        setError("The email address is invalid. Please enter a correct email.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch {
      setError("Google sign-in failed. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    setError('');
    setMessage('');
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent! Check your email.");
    } catch {
      setError("Failed to send reset email. Make sure your email is correct.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/signup.avif" alt="signup" className="rounded w-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4 bg-white p-8 rounded">
        <h1 className="text-3xl font-bold text-gray-800">{isLogin ? 'Login' : 'Create An Account'}</h1>
        <p className="text-gray-500">{isLogin ? 'Enter your login credentials' : 'Enter your details below'}</p>

        {/* Show redirect message from cart */}
        {message && <p className="text-red-500 text-sm">{message}</p>}

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db4444] transition"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db4444] transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db4444] transition"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button onClick={handleEmailAuth} className="w-full mt-2 p-3 bg-[#db4444] text-white rounded-lg hover:bg-[#b03030]">
          {isLogin ? 'Login' : 'Create Account'}
        </button>

        {isLogin && (
          <p
            onClick={handleForgotPassword}
            className="text-blue-500 text-sm mt-1 cursor-pointer hover:underline"
          >
            Forgot Password?
          </p>
        )}

        <p
          onClick={handleGoogleSignIn}
          className='flex gap-3 justify-center border border-gray-300 hover:bg-gray-300 hover:scale-103 cursor-pointer text-black px-9 py-3 rounded banner mt-2'
        >
          <img src="/google logo.png" alt="google" className='h-5'/> Sign {isLogin ? 'In' : 'Up'} With Google
        </p>

        <p className="text-gray-600 text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-bg-[#db4444] cursor-pointer font-semibold"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setMessage('');
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
