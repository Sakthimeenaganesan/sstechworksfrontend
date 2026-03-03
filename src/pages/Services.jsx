import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

/* ===== IMPORT IMAGES ===== */

import webImg from "../assets/web.png";
import reactImg from "../assets/react.jpg";
import flutterImg from "../assets/angular.jpg";
import miniImg from "../assets/mini.jpg";
import posterImg from "../assets/poster.png";
import supportImg from "../assets/support.png";

/* OTHER SERVICES IMAGES */

import resumeImg from "../assets/resume.jpg";
import inviteImg from "../assets/invite.jpg";
import visitingImg from "../assets/visiting.png";
import pptImg from "../assets/ppt.png";
import logoImg from "../assets/Logo-service.png"; // ✅ correct import


export default function Services() {

  /* ================= MAIN SERVICES ================= */

  const services = [
    {
      title: "Web Development",
      desc: "Modern responsive websites using React, WordPress and latest frameworks.",
      img: webImg,
    },
    {
      title: "React & Node Projects",
      desc: "Full-stack applications with scalable backend and clean architecture.",
      img: reactImg,
    },
    {
      title: "Angular Applications",
      desc: "Dynamic and scalable web applications using Angular framework.",
      img: flutterImg,
    },
    {
      title: "Mini Projects",
      desc: "Academic mini projects with documentation and explanation.",
      img: miniImg,
    },
    {
      title: "Final Year Projects",
      desc: "Industry-level projects with reports, diagrams and support.",
      img: posterImg,
    },
    {
      title: "Technical Guidance", 
      desc: "Debugging, mentoring and long-term technical support.",
      img: supportImg,
    },
  ];


  /* ================= OTHER SERVICES ================= */

  const otherServices = [

    {
      title: "Resume Design",
      desc: "Professional ATS-friendly resumes for job placement.",
      img: resumeImg,
    },

    {
      title: "Invitation Design",
      desc: "Creative invitations for weddings and events.",
      img: inviteImg,
    },

    {
      title: "Visiting Card Design",
      desc: "Professional business card designs.",
      img: visitingImg,
    },

    {
      title: "Presentation Design",
      desc: "Professional PPT and seminar slides.",
      img: pptImg,
    },

    {
      title: "Logo Creation",
      desc: "Modern, clean and memorable logo designs for brands and startups.",
      img: logoImg, // ✅ fixed here
    },

  ];


  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-extrabold text-gray-900">
            Our <span className="text-indigo-600">Services</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Professional digital solutions crafted with modern technology.
          </p>

        </div>



        {/* ================= MAIN SERVICES ================= */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={i * 0.1} />
          ))}

        </div>



        {/* ================= OTHER SERVICES ================= */}

        <section className="mt-40">

          <div className="grid md:grid-cols-12 gap-16 items-start">


            {/* LEFT */}

            <div className="md:col-span-3 sticky top-32">

              <h2 className="text-5xl font-bold text-gray-900">
                Other <span className="text-indigo-600">Services</span>
              </h2>

              <p className="text-gray-600 mt-6 text-lg">
                Creative and branding services designed to elevate your identity.
              </p>

            </div>



            {/* CENTER LINE */}

            <div className="hidden md:flex md:col-span-1 justify-center">

              <div className="w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent h-full"/>

            </div>



            {/* RIGHT */}

            <div className="md:col-span-8 space-y-14">


              {otherServices.map((service, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >

                  <div className="grid md:grid-cols-2 items-center overflow-hidden border border-gray-200">


                    {/* IMAGE */}

                    <div className="overflow-hidden">

                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-[220px] object-cover transform group-hover:scale-110 group-hover:translate-x-4 transition duration-700"
                      />

                    </div>



                    {/* CONTENT */}

                    <div className="bg-white p-10 group-hover:bg-indigo-600 transition duration-500">

                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mt-4 group-hover:text-indigo-100 transition">
                        {service.desc}
                      </p>

                      <div className="mt-6 w-0 group-hover:w-16 h-[3px] bg-indigo-600 group-hover:bg-white transition-all duration-500"/>

                    </div>

                  </div>

                </motion.div>

              ))}


            </div>

          </div>

        </section>


      </section>

      <Footer />

    </>
  );

}



/* ================= SERVICE CARD ================= */

function ServiceCard({ service, delay }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-400 transition"
    >

      <div className="overflow-hidden">

        <img
          src={service.img}
          alt={service.title}
          className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>


      <div className="p-6 text-center">

        <h3 className="text-xl font-semibold text-indigo-600 mb-2">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {service.desc}
        </p>

      </div>

    </motion.div>

  );

}
