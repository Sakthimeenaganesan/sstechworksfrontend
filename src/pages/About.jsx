import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github } from "lucide-react";

import bgImage from "../assets/request-bg.png";
import meenaImg from "../assets/team/meena.jpeg";
import sathiyaImg from "../assets/team/sathiya.jpeg";


/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};


export default function About() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">

        {/* ===== Background ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm" />


        <div className="relative z-20 max-w-6xl mx-auto px-6 space-y-24">

          {/* ================= HERO ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">

              <TypeAnimation
                sequence={[
                  "About S&S Techworks", 1500,
                  "Building Smart Digital Solutions", 1500,
                  "Web • Mobile • Design • Projects", 1500,
                ]}
                speed={60}
                repeat={Infinity}
                cursor
                className="text-indigo-600"
              />

            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We provide professional digital solutions including websites,
              mobile apps, creative design, and academic projects using modern
              technologies and clean architecture.
            </p>
          </motion.div>


          {/* ================= WHO WE ARE ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Who We Are
              </h2>

              <p className="text-gray-700">
                S&S Techworks is a modern digital solutions startup focused on
                building websites, mobile applications, design materials, and
                academic projects for students and businesses.
              </p>

              <p className="text-gray-700">
                Our mission is to combine technology and creativity to deliver
                scalable, reliable, and professional solutions that truly make
                an impact.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur rounded-xl p-8 shadow">
              <h3 className="text-indigo-600 font-semibold mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✔ Clean & Maintainable Code</li>
                <li>✔ On-Time Delivery</li>
                <li>✔ Client First Approach</li>
                <li>✔ Continuous Improvement</li>
              </ul>
            </div>
          </motion.div>


          {/* ================= SERVICES ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-center mb-10">
              What We Do
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard title="Web Development" desc="React, Angular & WordPress" />
              <ServiceCard title="Mobile Apps" desc="Flutter Android & iOS" />
              <ServiceCard title="Academic Projects" desc="Mini & Final Year" />
              <ServiceCard title="Design Services" desc="Posters & creatives" />
              <ServiceCard title="Bug Fixing" desc="Debugging & optimization" />
              <ServiceCard title="Resume Building" desc="Professional resumes" />
            </div>
          </motion.div>


          {/* ================= TEAM ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-10">
              Meet Our Team
            </h2>

            <div className="grid sm:grid-cols-2 gap-10">
                              <TeamCard
                img={sathiyaImg}
                name="Sathiyapriya"
                role="Full Stack Developer"
                desc="MEAN, MERN stack expert with a passion for scalable web solutions."
                linkedin="https://www.linkedin.com/in/sathiyapriya-m1305/"
                
              />
              <TeamCard
                img={meenaImg}
                name="Sakthimeena"
                role="Full Stack Developer"
                desc="MERN stack, poster design"
                linkedin="https://www.linkedin.com/in/sakthimeena-g-3595412a5"
              />



            </div>
          </motion.div>


         {/* ===================================================== */}
{/* ================= VISION & MISSION ================= */}
{/* ===================================================== */}
<section className="py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-gray-900">
        Our <span className="text-indigo-600">Vision & Mission</span>
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Driven by clarity, innovation and long-term value creation.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-12 items-stretch">

      {/* ================= VISION ================= */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-12 shadow-xl flex flex-col justify-between">

        <div>
          <h3 className="text-3xl font-bold mb-6 tracking-wide">
            Our Vision
          </h3>

          <p className="text-lg leading-relaxed text-indigo-100">
            To become a trusted digital partner for startups, students and 
            growing businesses by delivering scalable, future-ready solutions 
            that combine technology, creativity and strategic thinking.
          </p>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-indigo-200">
          Focused on innovation • Built for impact • Designed for growth
        </div>

      </div>


      {/* ================= MISSION ================= */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 shadow-lg flex flex-col justify-between">

        <div>
<h3 className="text-3xl font-bold text-violet-600 mb-6 tracking-wide">
  Our Mission
</h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to craft high-quality digital products with 
            clean architecture, transparent communication and consistent 
            technical excellence. We aim to simplify complex ideas and 
            transform them into powerful, real-world solutions.
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          Structured planning • Transparent execution • Long-term support
        </div>

      </div>

    </div>
  </div>
</section>


        </div>
      </section>

      <Footer />
    </>
  );
}


/* ================= COMPONENTS ================= */

function ServiceCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/90 backdrop-blur p-6 rounded-xl shadow"
    >
      <h3 className="text-indigo-600 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}


function TeamCard({ img, name, role, desc, linkedin }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        relative group
        bg-white/90 backdrop-blur
        rounded-2xl p-8 text-center
        shadow-lg
        border border-transparent
        hover:border-indigo-300
        hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
        transition-all duration-300
      "
    >
      {/* Role Badge */}
      <span className="absolute top-4 right-4 text-xs font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
        {role}
      </span>

      {/* Photo */}
      <img
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover grayscale group-hover:grayscale-0 transition duration-500 border-4 border-indigo-100"
      />

      {/* Name */}
      <h3 className="mt-4 font-semibold text-indigo-600 text-lg">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3 mb-5">
        {desc}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4">

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
        >
          <Linkedin size={18} />
        </a>



      </div>
    </motion.div>
  );
}
