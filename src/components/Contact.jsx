import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vyditr3",
        "template_gyz34ri",
        form.current,
        "fZUj9jG-GsMvNzY8z"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
        },
        () => {
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-5xl mx-auto"
    >

      <h2 className="text-5xl font-bold text-center mb-20">
        Contact Me
      </h2>

      <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-lg shadow-[0_0_40px_rgba(0,255,255,0.12)]">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-black/30 border border-cyan-500/20 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-black/30 border border-cyan-500/20 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-black/30 border border-cyan-500/20 outline-none"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl text-lg shadow-[0_0_25px_cyan]"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}