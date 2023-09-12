// // Render Prop
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const Basic = () => (
//   <div className="bg-red-100  h-[500px] flex items-center justify-center">
//   <div className="bg-white p-8 rounded-md shadow-md">
//     <h1 className="font-bold p-2 m-2 text-2xl">Login Details</h1>
//     {/* <h2 className="uppercase font-semibold text-xl px-2">Name</h2> */}
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         if (!values.password) {
//           errors.password = 'Required';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 1));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div className="flex flex-col">
//             <Field
//               className="bg-gray-500 p-2 m-2 rounded-md"
//               type="email"
//               name="email"
//               placeholder="Email"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500 text-sm m-2"
//             />
//             <Field
//               className="bg-gray-500 p-2 m-2 rounded-md"
//               type="password"
//               name="password"
//               placeholder="Password"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="text-red-500 text-sm m-2"
//             />
//           </div>
//           <button
//             className="p-2 m-2 bg-blue-400 rounded-md"
//             type="submit"
//             disabled={isSubmitting}
//           >
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// </div>

// );

// export default Basic;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

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
            <div className="w-full max-w-md mx-auto">
  <h1 className="text-3xl font-semibold text-center mb-4 mt-2">Login Page</h1>

  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
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
    </div>
  </div>
</div>
tg
        </>
    )
}

export default Basic;
