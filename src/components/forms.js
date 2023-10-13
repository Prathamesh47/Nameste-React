import login1 from "../assets/login.jpg"

// export default Basic;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Header from "./Header";

const Basic = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history("/add"); // Use the history function to navigate
        }
    }, [history]); // Add history as a dependency to the useEffect hook

    async function login() {
        console.warn(email, password);
        let item = { email, password };
        let result = await fetch("http://localhost:3001/login", { // Await the fetch promise
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });

        if (result.ok) { // Check if the response is OK (status 200)
            let data = await result.json();
            localStorage.setItem("user-info", JSON.stringify(data));
            history("/add"); // Use the history function to navigate
        } else {
            console.error("Login failed");
        }
    }

    return (
        <>
            <div className="w-full max-w-md mx-auto h-screen">
  <h1 className="text-3xl font-semibold text-center mb-4 mt-10">Login Page</h1>

  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  ">
    <div className="mb-6">
      <div className="mb-3 flex flex-col items-center justify-center">
        <img src={login1} className="h-40 w-50" alt="login"/>
      </div>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={login}
      >
        Login
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={login}
      >
        Signup
      </button>
    </div>
  </div>
</div>

        </>
    )
}

export default Basic;
