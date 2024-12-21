/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {toast} from "react-hot-toast";
import { IoCallSharp, IoSendSharp } from "react-icons/io5";
import HighlightText from "./HighlightText";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import FlipIcon from "./ui/icon-flip";

function Contact() {

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "70fafe61-ee0f-4433-a16c-1243e80862f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Thanks for Contacting Us")
      console.log("Success", res);
      event.target.reset();
    }
  };
  return (
    <>
      <div
        id="contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-4xl text-center font-bold mb-2"><HighlightText text="Contact me" /></h1>
        <div className='border-2 border-[#e77bfa] w-[5%] mx-auto md:mb-20 mb-10'></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="flex flex-col gap-16">
            <div className="flex gap-5">
              <div className=" dark:bg-slate-800 bg-[#f5d1f6] h-12 w-12 rounded-full flex justify-center items-center">
                <FlipIcon icon={<IoCallSharp className="text-2xl text-[#E88DEA]"/>} />
              </div>
              <div className="space-y-0">
                <h1 className="text-2xl"><HighlightText text="Phone Number" /></h1>
                <p className="dark:text-slate-400 text-slate-700">9330235553</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" dark:bg-slate-800 bg-[#f5d1f6] h-12 w-12 rounded-full flex justify-center items-center">
                <FlipIcon icon={<MdEmail className="text-2xl text-[#E88DEA]"/>} />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl"><HighlightText text="Email" /></h1>
                <a href="mailto:mdashamimad3246@gmail.com" className="dark:text-slate-400 text-slate-700">mdashamimad3246@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" dark:bg-slate-800 bg-[#f5d1f6] h-12 w-12 rounded-full flex justify-center items-center">
                <FlipIcon icon={<FaLinkedin className="text-2xl text-[#E88DEA]"/>} />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl"><HighlightText text="LinkedIn" /></h1>
                <a href="https://www.linkedin.com/in/md-asham-imad-926316224/" className="dark:text-slate-400 text-slate-700">https://www.linkedin.com/in/md-asham-imad-926316224/</a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <form
              onSubmit={submitHandler}
              className="w-96 px-10 py-8 rounded-xl border-2 border-[#e77bfa]"
            >
              <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Full Name<span className="text-red-600 font-bold">*</span></label>
                <input
                  className="shadow rounded-lg appearance-none border border-[#e77bfa] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Email Address<span className="text-red-600 font-bold">*</span></label>
                <input
                  className="shadow rounded-lg appearance-none border border-[#e77bfa] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Message<span className="text-red-600 font-bold">*</span></label>
                <textarea
                  className="shadow rounded-lg appearance-none border py-2 px-3 border-[#e77bf0] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  placeholder="Enter your Query"
                />
              </div>
              <button
                type="submit"
                className="bg-[#e77bfa] hover:bg-[#d53af0] transition-all duration-200 cursor-pointer 
                text-white font-bold rounded-xl px-3 py-2 flex gap-3 items-center w-full justify-center"
              >
                Send <IoSendSharp />
              </button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;