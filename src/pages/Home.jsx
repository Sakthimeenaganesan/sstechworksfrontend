import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import borderPattern from "../assets/border.png";
import toast, { Toaster } from "react-hot-toast";


import {
  Globe,
  Code,
  Smartphone,
  BookOpen,
  Palette,
  LifeBuoy, 
  MessageSquare,
  ClipboardList,
  RefreshCcw,
  Handshake,
  MessageCircle 
} from "lucide-react";




/* ================= AUTO LOAD HERO IMAGES ================= */
const images = Object.values(
  import.meta.glob("../assets/herobg/*.{png,jpg,jpeg}", {
    eager: true,
    import: "default",
  })
);

export default function Home() {

  /* ================= CAROUSEL ================= */
  const [index, setIndex] = useState(0);
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
const handleSubmit = async (e) => {
  e.preventDefault();

  // validation
  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill all required fields");
    return;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(form.email)) {
    toast.error("Invalid email address");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Message sent successfully 🎉");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Something went wrong");
    }
  } catch {
    toast.error("Server not reachable");
  }
};


  return (
    <>
      <Navbar />


      {/* ===================================================== */}
      {/* ================= HERO SECTION ====================== */}
      {/* ===================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        {/* ===== CAROUSEL IMAGES ===== */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* ===== DARK OVERLAY ===== */}
        <div className="absolute inset-0 bg-black/45" />


        {/* ===================================================== */}
        {/* ================= CENTER GLASS BOX ================== */}
        {/* ===================================================== */}
        <div className="relative z-10 text-center px-6">

          <div
            className="
              bg-black/55
              backdrop-blur-md
              rounded-2xl
              px-12 py-12
              max-w-2xl
              mx-auto
              shadow-2xl
              border border-white/10
            "
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Solutions
              <br />
              <span className="text-indigo-400">Built Professionally</span>
            </h1>

            <p className="text-gray-200 text-lg mb-8">
              Websites • Apps • Posters • Branding • Academic Projects
            </p>

            <div className="flex justify-center gap-5 flex-wrap">
              <a
                href="/request"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Request a Service
              </a>

              <a
                href="#services"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                View Services
              </a>
            </div>
          </div>
        </div>


        {/* ===== DOTS ===== */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>


{/* ===================================================== */}
{/* ================= ABOUT SECTION ===================== */}
{/* ===================================================== */}
<section
  id="about"
  className="py-32 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* ================= LEFT ================= */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-10"
    >
      {/* BIGGER HEADING */}
      <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
        About
        <span className="text-indigo-600"> S&S Techworks</span>
      </h2>

      {/* BIGGER PARAGRAPHS */}
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
        We are a modern digital solutions company delivering
        <span className="font-semibold text-gray-800">
          {" "}websites, mobile apps, branding designs and software systems{" "}
        </span>
        with clean architecture and real-world quality.
      </p>

      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
        From startups to students, we transform ideas into scalable
        digital products using modern technology and creative thinking.
      </p>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-3 gap-12 pt-8">
       
        <Stat number="6+" label="Core Services" delay={0.2} />
        <Stat number="100%" label="Client Satisfaction" delay={0.3} />
      </div>
    </motion.div>



    {/* ================= RIGHT GLASS CARD ================= */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20 group-hover:opacity-40 transition rounded-3xl" />

      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          What We Provide
        </h3>

        {[
          "Professional Websites",
          "Mobile Applications",
          "Branding & Posters",
          "Academic Projects",
          "Maintenance & Support",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 text-lg text-gray-700 py-3"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
              ✓
            </span>
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>

  </div>
</section>



{/* ===================================================== */}
{/* ================= SERVICES SECTION ================== */}
{/* ===================================================== */}
<section
  id="services"
  className="py-32 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= HEADING ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900">
        Our
        <span className="text-indigo-600"> Services</span>
      </h2>

      <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto">
        Professional digital solutions crafted with modern technology,
        clean architecture and real-world standards.
      </p>
    </motion.div>



    {/* ================= CARDS ================= */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

      <ServiceCard
        icon={<Globe size={34} />}
        title="Web Development"
        desc="Modern responsive websites using React, WordPress & latest frameworks."
        delay={0}
      />

      <ServiceCard
        icon={<Code size={34} />}
        title="React & Node Projects"
        desc="Full-stack applications with scalable backend and clean structure."
        delay={0.1}
      />

      <ServiceCard
        icon={<Smartphone size={34} />}
        title="Flutter Apps"
        desc="Cross-platform Android & iOS apps with smooth UI/UX."
        delay={0.2}
      />

      <ServiceCard
        icon={<BookOpen size={34} />}
        title="Academic Projects"
        desc="Mini & final year projects with documentation and explanation."
        delay={0.3}
      />

      <ServiceCard
        icon={<Palette size={34} />}
        title="Design & Posters"
        desc="Creative branding, posters, visiting cards and marketing designs."
        delay={0.4}
      />

      <ServiceCard
        icon={<LifeBuoy size={34} />}
        title="Technical Support"
        desc="Debugging, guidance and long-term maintenance support."
        delay={0.5}
      />

    </div>
  </div>
</section>



{/* ===================================================== */}
{/* ================= WHY CHOOSE US (NEW STYLE) ========= */}
{/* ===================================================== */}
<section className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

    {/* ================= LEFT INTRO ================= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h2 className="text-6xl font-extrabold text-gray-900 leading-tight">
        Why
        <span className="text-indigo-600"> Choose Us</span>
      </h2>

      <p className="text-xl text-gray-600 leading-relaxed">
        We go beyond development. Our focus is on delivering reliable,
        scalable and well-structured digital solutions with complete
        clarity and professional standards.
      </p>

      <p className="text-lg text-gray-500 leading-relaxed">
        Every project is executed with planning, precision and long-term
        sustainability in mind — ensuring quality results you can confidently present or deploy.
      </p>
    </motion.div>


    {/* ================= RIGHT TIMELINE STYLE ================= */}
    <div className="relative border-l-2 border-indigo-200 pl-10 space-y-14">

      {[
        {
          title: "Student & Client Focused",
          desc: "Solutions aligned with academic syllabus and real-world application standards."
        },
        {
          title: "Structured Development Process",
          desc: "Clear planning, proper documentation and clean architecture at every stage."
        },
        {
          title: "On-Time Execution",
          desc: "Commitment to deadlines without compromising quality."
        },
        {
          title: "Complete Guidance",
          desc: "End-to-end mentoring including explanations and technical clarity."
        },
        {
          title: "Long-Term Support",
          desc: "Post-delivery assistance and technical improvements when required."
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Circle */}
          <div className="absolute -left-[34px] top-1 w-6 h-6 bg-indigo-600 rounded-full shadow-md" />

          {/* Content */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>



<section className="relative py-28 overflow-hidden">

  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700" />


  {/* ===================================================== */}
  {/* ================= BORDER PATTERN ===================== */}
  {/* ===================================================== */}

  {/* TOP */}
  <div
    className="absolute top-0 left-0 w-full h-16 bg-repeat-x z-10"
    style={{
      backgroundImage: `url(${borderPattern})`,
      backgroundSize: "auto 100%",
    }}
  />

  {/* BOTTOM */}
  <div
    className="absolute bottom-0 left-0 w-full h-16 bg-repeat-x z-10 rotate-180"
    style={{
      backgroundImage: `url(${borderPattern})`,
      backgroundSize: "auto 100%",
    }}
  />

  

  {/* ===================================================== */}
  {/* ================= CONTENT ============================ */}
  {/* ===================================================== */}

  <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-6">

    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
      Let’s Build Something Amazing Together
    </h2>

    <p className="text-xl text-indigo-100 mb-10">
      Have an idea or project in mind? We design, develop and deliver
      high-quality digital solutions tailored to your needs.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">

      <a
        href="/request"
        className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
      >
        Get Started
      </a>

      <a
        href="#services"
        className="px-8 py-4 border-10 border-white text-white rounded-xl hover:bg-white hover:text-indigo-700 transition"
      >
        View Services
      </a>

    </div>

  </div>

</section>

{/* ===================================================== */}
{/* ================= CONTACT SECTION =================== */}
{/* ===================================================== */}

<section
  id="contact"
  className="relative py-32 bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* ========= HEADING ========= */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
        Let’s Start a <span className="text-indigo-600">Conversation</span>
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Share your idea with us — we’ll turn it into reality.
      </p>
    </div>


    {/* ========= CARD LAYOUT ========= */}
    <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* ================= LEFT INFO PANEL ================= */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-12 flex flex-col justify-center space-y-6">

  <h3 className="text-3xl font-bold">
    Why Work With Us?
  </h3>

  <p className="text-indigo-100">
    We believe great projects are built through collaboration,
    clarity and consistent communication. From the first discussion
    to final delivery, we stay connected at every step.
  </p>

<div className="space-y-6 text-indigo-100">

  <div className="flex items-center gap-4">
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
      <MessageSquare size={18} className="text-white" />
    </div>
    <span>Transparent Communication & Regular Updates</span>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
      <ClipboardList size={18} className="text-white" />
    </div>
    <span>Clear Roadmap & Structured Planning</span>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
      <RefreshCcw size={18} className="text-white" />
    </div>
    <span>Flexible Revisions & Improvements</span>
  </div>

  <div className="flex items-center gap-4">
    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
      <Handshake size={18} className="text-white" />
    </div>
    <span>Long-Term Partnership Approach</span>
  </div>

</div>
      </div>


      {/* ================= RIGHT FORM ================= */}
      <div className="p-12 bg-white">
        <ContactForm />
      </div>

    </div>

  </div>
</section>

{/* ================= WHATSAPP FLOAT BUTTON ================= */}
{/* ================= FLOATING WHATSAPP ================= */}
<motion.a
  href="https://wa.me/917397672111?text=Hi%20S%26S%20Techworks,%20I%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 80, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 10,
    delay: 0.5,
  }}
  whileHover={{ scale: 1.12 }}
  whileTap={{ scale: 0.95 }}
  className="
    fixed
    bottom-6
    right-6
    z-50
    bg-green-500
    hover:bg-green-600
    text-white
    w-16
    h-16
    rounded-full
    flex
    items-center
    justify-center
    shadow-[0_0_25px_rgba(34,197,94,0.5)]
    transition-all
  "
>
  <MessageCircle size={30} />
</motion.a>



      <Footer />
    </>
  );
}



/* ===================================================== */
/* ================= SMALL COMPONENTS ================== */
/* ===================================================== */

function Stat({ number, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-extrabold text-indigo-600">
        {number}
      </h3>
      <p className="text-base text-gray-500 mt-2">
        {label}
      </p>
    </motion.div>
  );
}




function WhyCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        bg-white
        rounded-2xl
        p-10
        border border-gray-200
        shadow-sm
        hover:shadow-lg
        hover:border-indigo-300
        transition-all duration-300
      "
    >
      <div
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-xl
          bg-indigo-50
          text-indigo-600
          mb-6
          group-hover:bg-indigo-600
          group-hover:text-white
          transition-all duration-300
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-lg text-gray-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}




function ServiceCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
        group
        bg-white
        rounded-2xl
        p-10
        border border-gray-200
        shadow-md
        hover:shadow-xl
        hover:border-indigo-300
        transition-all duration-300
      "
    >
      {/* ================= ICON WITH GLOW ================= */}
      <div
        className="
          w-16 h-16 mx-auto
          flex items-center justify-center
          rounded-full
          bg-indigo-100
          text-indigo-600
          mb-6
          transition-all duration-300

          group-hover:bg-indigo-600
          group-hover:text-white
          group-hover:scale-110
          group-hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
        "
      >
        {icon}
      </div>

      {/* ================= TITLE ================= */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
        {title}
      </h3>

      {/* ================= DESCRIPTION ================= */}
      <p className="text-gray-600 text-lg text-center leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (form.phone && !/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Message sent successfully 🚀");

      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6"
    >

      {/* NAME */}
      <FormField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />

      {/* EMAIL */}
      <FormField
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      {/* PHONE */}
      <FormField
        label="Phone Number (Optional)"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      {/* MESSAGE */}
      <FormTextarea
        label="Tell us about your project"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full py-3
          bg-indigo-600
          text-white font-medium
          rounded-lg
          transition
          hover:bg-indigo-700
          disabled:opacity-60
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}
function FormField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3
          border rounded-md
          outline-none
          transition
          ${error ? "border-red-500" : "border-gray-300"}
          focus:border-indigo-600
          focus:ring-1 focus:ring-indigo-600
        `}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
function FormTextarea({ label, name, value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        className={`
          w-full px-4 py-3
          border rounded-md
          outline-none resize-none
          transition
          ${error ? "border-red-500" : "border-gray-300"}
          focus:border-indigo-600
          focus:ring-1 focus:ring-indigo-600
        `}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
