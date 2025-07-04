import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9821f688-0bca-4bc8-bebe-4d57a06c9d82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className="text-center mb-2 text-lg font-heading">CONNECT WITH ME</h4>
      <h2 className="text-center text-5xl">Get In Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Thank you for visiting my portfolio! If you’re looking for a dedicated
        and passionate web developer to join your team, collaborate on a
        project, or just have a friendly chat about tech — I’d love to connect.
        Let’s turn ideas into reality!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
            rows={6}
            placeholder="Enter your message"
            name="message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          >
            Submit Now <FaArrowRight />
          </button>

          <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
