/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { IoCallSharp, IoSendSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import HighlightText from "./HighlightText";
import { FaXTwitter } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <IoCallSharp className="text-brand-300 text-xl" />,
    label: "Phone",
    value: "+91 9330235553",
    href: "tel:+919330235553",
  },
  {
    icon: <MdEmail className="text-brand-300 text-xl" />,
    label: "Email",
    value: "mdashamimad3246@gmail.com",
    href: "mailto:mdashamimad3246@gmail.com",
  },
  {
    icon: <FaLinkedin className="text-brand-300 text-xl" />,
    label: "LinkedIn",
    value: "md-asham-imad",
    href: "https://www.linkedin.com/in/md-asham-imad-926316224/",
  },
  {
    icon: <FaXTwitter className="text-brand-300 text-xl" />,
    label: "Twitter",
    value: "Asham0711",
    href: "https://x.com/asham0711",
  },
];

function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "70fafe61-ee0f-4433-a16c-1243e80862f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Message sent! I'll get back to you soon.");
      event.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-brand-300/5 dark:bg-white/[0.03] px-4 py-3 text-[0.9rem] text-black dark:text-white placeholder:text-[#999] outline-none transition-all duration-250";

  const inputIdle = "border-brand-300/20";
  const inputFocused =
    "border-brand-300/70 shadow-[0_0_0_3px_rgba(33,147,176,0.1)]";

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-300/5 blur-[80px] z-0" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="md:text-5xl text-4xl font-extrabold">
            <HighlightText text="Contact Me" />
          </h1>
          <p className="text-lg text-[#888] mt-2">
            Got an idea or opportunity? Let&apos;s talk.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-4">
            <p className="text-[0.95rem] leading-7 text-[#555] dark:text-[#bbb]">
              Whether it&apos;s a full-time role, freelance project, or just a
              conversation about tech — my inbox is always open.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3 mt-2">
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-brand-300/15 dark:bg-white/[0.02] bg-brand-300/[0.08] px-4 py-3 transition-all duration-250 hover:border-brand-300/50 hover:shadow-[0_4px_20px_rgba(33,147,176,0.1)] hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-brand-300/20 dark:bg-white/[0.03] bg-brand-300/[0.1] flex items-center justify-center transition-all duration-250 group-hover:border-brand-300/50 group-hover:shadow-[0_0_12px_rgba(33,147,176,0.2)]">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888] leading-none mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-[0.85rem] font-semibold dark:text-white text-black">
                      {c.value}
                    </p>
                  </div>
                  <span className="ml-auto text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-250 text-sm">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-300/20 dark:bg-white/[0.02] bg-brand-300/[0.08] p-7">
            {/* Top shimmer */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />

            <div className="flex items-center gap-2 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-300 shadow-[0_0_8px_#2193b0] animate-pulse" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-300">
                message.send
              </span>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Asham Imad"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === "name" ? inputFocused : inputIdle}`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === "email" ? inputFocused : inputIdle}`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} ${focused === "subject" ? inputFocused : inputIdle}`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me what's on your mind..."
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} resize-none ${focused === "message" ? inputFocused : inputIdle}`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-300 via-brand-200 to-brand-100 px-6 py-3 rounded-xl font-semibold text-black text-[0.9rem] transition-all duration-250 hover:shadow-[0_0_24px_rgba(33,147,176,0.35)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <IoSendSharp />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
