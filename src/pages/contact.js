import React, { useState } from "react";
import Head from "next/head";
import Image from "node_modules/next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div id="contact">
      <div className="relative min-h-screen">
        <Head>
            <title>Contact Form</title>
        </Head>
        <div className="absolute left-0 w-full h-full flex justify-center items-center flex-col bg-white bg-opacity-40 p-8">
          <div className="grid grid-cols-2 mx-auto mt-[-6rem]">
            <div className="p-8 flex flex-col items-center">
              <h1 className="text-2xl font-semibold text-darkBlue">
                  Contact Us
              </h1>
              <div className="justify-center items-center mt-8">
                <div className="max-w-md mx-auto px-4">
                  {error && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative"
                      role="alert"
                    >
                      {error}
                    </div>
                  )}
                  {success && (
                    <div
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative"
                      role="alert"
                    >
                      {success}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-xl text-darkBlue mb-2" htmlFor="name">
                        Email
                      </label>
                      <input
                        className="resize-none border rounded-lg w-full py-2 px-24 focus:outline-none focus:shadow-md text-base font-medium"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-darkBlue text-xl mb-2" htmlFor="email">
                        Name
                      </label>
                      <input
                        className="resize-none border rounded-lg w-full py-2 px-24 focus:outline-none focus:shadow-md text-base font-medium"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-darkBlue text-xl mb-2"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="resize-none border rounded-lg w-full py-2 px-24 focus:outline-none focus:shadow-md text-base font-medium"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="bg-finGrey hover:bg-darkBlue text-darkBlue hover:text-lightBlue font-bold py-1 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="p-20 flex flex-col items-center">
              <div className="avatar">
                <Image
                  src="/images/Logo1.png"
                  alt="bigLogo"
                  width={350}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
