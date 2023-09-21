import React from "react";
import { useState } from "react";
import {IoMdCall} from "react-icons/io"
import {FiMail} from "react-icons/fi"

// import {
//   FaGithub,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa";
import contact from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center"> 
        <div id="contact" className="flex flex-col space-y-2 md:flex-row md:space-x-8 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col  space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
              <IoMdCall className=""></IoMdCall>
              
              <h4 className="px-2">+(123) 456 7890</h4>
              </div>

              <div className="inline-flex space-x-2 items-center">
              <FiMail></FiMail>
              
              <h4 className="px-2">pratham03@gmail.com</h4>
              </div>
            </div>
            
          </div>

          <div>
            <div className="bg-white rounded-xl shodow-lg p-8">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-black ">
                NAME:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-8">
              <label className="text-black">
                EMAIL:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-8">
              <label className="text-black">
                MESSAGE:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="py-4">
              <button
                type="submit"
                className="inline-block self-end bg-cyan-700 text-whit font-bold rounded-lg px-6 py-2 uppercase "
              >
                Submit
              </button>
            </div>
          </form>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Contact;


{/* <div className="">
          <img src={contact} alt="" />
        </div> */}


        