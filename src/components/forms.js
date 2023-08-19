// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div className="bg-red-100  h-[500px] flex items-center justify-center">
  <div className="bg-white p-8 rounded-md shadow-md">
    <h1 className="font-bold p-2 m-2 text-2xl">Login Details</h1>
    {/* <h2 className="uppercase font-semibold text-xl px-2">Name</h2> */}
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 1));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col">
            <Field
              className="bg-gray-500 p-2 m-2 rounded-md"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm m-2"
            />
            <Field
              className="bg-gray-500 p-2 m-2 rounded-md"
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm m-2"
            />
          </div>
          <button
            className="p-2 m-2 bg-blue-400 rounded-md"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
</div>

);

export default Basic;

// import React, {useEffect, useState} from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { json, useNavigate } from "react-router-dom";

// const schema= Yup.object().shape({
//   email:Yup.string()
//   .required("Email is a required field")
//   .email("Invalid email format"),
//   password:Yup.string()
//   .required("Password is a required field")
//   .min(8,"Password must be at least 8 characters"),
// });

// const Basic = ()=>{
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(()=>{
//     if(token?.length===100)
//     {
//       navigate(-1);
//     }
//   },[]);

//   function handleNavigate(values){
//     setTimeout(()=>{
//         const genRandomStringNthChar = () => {
//             return[...Array(100)]
//               .map(()=>Math.random().toString(36)[2])
//               .join("");
//         };
//         localStorage.setItem("token",genRandomStringNthChar());
//         navigate(-1);
//     },0);
//   }
//   if(token?.length===100)return null;

//     return(
//       <>
//         <Formik
//             validationSchema={schema}
//             initialValues={{email:"",password:""}}
//             onSubmit={(values)=>{
//               handleNavigate(JSON.stringify(values));

//             }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//           })=>(
//             <div className="login-container w-[380px] m-[40px]">
//               <div className='login-form relative bg-orange-300 border-r-10 w-[380] p-[25px] text-align-center'>
//                 <form noValidate onSubmit={handleSubmit}>
//                   <span className="font-[40px] color-[ #4b6cb7] mb-[25px] block">Login</span>
//                   <input
//                     type='email'
//                     name='email'
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     placeholder="Enter your email"
//                     className="form-control inp_text outline-0 p-5 bg-gray-200 w-full border-0 border-r-5 m-0-0-15 font-[14px] focus:bg-red-300 "
//                     id="email"
                    
//                     />
//                     <p className="error">
//                   {errors.email && touched.email && errors.email}
//                 </p>
//                 {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                   placeholder="Enter your password"
//                   className="form-control outline-0 p-5 bg-gray-200 w-full border-0 border-r-5 m-0-0-15 font-[14px] focus:bg-red-300"
//                 />
//                 {/* If validation is not passed show errors */}
//                 <p className="error text-align-left font-[13px] color-red">
//                   {errors.password && touched.password && errors.password}
//                 </p>
//                 {/* Click on submit button to submit the form */}
//                 <div className="py-4">
//                 <button className="uppercase outline-0  bg-blue-500  border-0 border-r-5 p-[15px] font-[14px] cursor-pointer" type="submit">Submit</button>
//                 </div>
//                 </form>

//               </div>
//             </div>
//           )}

//         </Formik>
//       </>
//     )
// }

// export default Basic;
