import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "@/components/models/Fox";
import Loader from "@/components/home/Loader";
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/common/Alert";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Blitz",
          from_name: form.email,
          to_email: "novablitz03@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      });
  }
  function handleFocus() {
    setCurrentAnimation("walk");
  }
  function handleBlur() {
    setCurrentAnimation("idle");
  }

  return (
    <section className="relative flex lg:flex-row flex-col container mx-auto px-6 pt-10">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>
        <form
          className="w-full flex flex-col gap-5 mt-14"
          onSubmit={handleSubmit}>
          <label className="text-black-500 font-bold">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-bold">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-bold">Your Message</label>
          <textarea
            rows={4}
            name="message"
            className="input"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            disabled={isLoading}
            onBlur={handleBlur}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
