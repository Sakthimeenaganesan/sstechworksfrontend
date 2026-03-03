import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  /* ================= STATE ================= */

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */

  const validate = () => {

    let newErrors = {};

    if (!form.name.trim() || form.name.length < 3)
      newErrors.name = "Enter valid name";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email))
      newErrors.email = "Enter valid email";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (form.message.length < 10)
      newErrors.message = "Message too short";

    return newErrors;
  };


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);
      return;

    }

    try {

      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(form)

      });

      if (!res.ok)
        throw new Error("Failed");

      setSuccess(true);

      setForm({

        name: "",
        email: "",
        phone: "",
        message: "",

      });

      setErrors({});

    }

    catch (err) {

      alert("Error submitting form");

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <>

      <Navbar />

      <section className="pt-32 pb-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}

          <div className="text-center mb-16">

            <h1 className="text-5xl font-bold text-gray-900">

              Contact Us

            </h1>

            <p className="text-gray-600 mt-4 text-lg">

              Let's build something amazing together.

            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-16">


            {/* LEFT CONTACT INFO */}

<div className="space-y-6">

  <ContactInfo
    icon={Mail}
    title="Email Address"
    value="sstechworks26@gmail.com"
  />

  <ContactInfo
    icon={Phone}
    title="Phone Number"
    value="+91 7397672111"
  />

  <ContactInfo
    icon={MapPin}
    title="Location"
    value="Tamil Nadu, India"
  />



{/* ================= LOCATION MAP ================= */}

<div style={{
  padding: "100px 8%",
  background: "#f8fafc"
}}>

  <h2 style={{
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "50px"
  }}>
  
  </h2>

  <div style={{
    maxWidth: "1000px",
    margin: "0 auto"
  }}>

 
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2130969164023!2d80.16995557473538!3d13.022097587297923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526148c7fa3b4b%3A0x6ff32f6354b9302a!2sSri%20Hari%20women&#39;s%20PG!5e0!3m2!1sen!2sin!4v1772532231554!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: "20px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>

</div>



</div>



            {/* RIGHT FORM */}

            <form

              onSubmit={handleSubmit}

              className="bg-white p-10 rounded-2xl border border-gray-200 space-y-6"

            >

              <Input

                name="name"

                value={form.name}

                onChange={handleChange}

                placeholder="Full Name"

                error={errors.name}

              />


              <Input

                name="email"

                value={form.email}

                onChange={handleChange}

                placeholder="Email Address"

                error={errors.email}

              />


              {/* PHONE FIELD */}

              <Input

                name="phone"

                value={form.phone}

                onChange={handleChange}

                placeholder="Phone Number"

                error={errors.phone}

              />


              <textarea

                name="message"

                value={form.message}

                onChange={handleChange}

                placeholder="Your Message"

                className="w-full p-4 border rounded-xl"

              />


              {errors.message &&

                <p className="text-red-500 text-sm">

                  {errors.message}

                </p>

              }


              <button

                disabled={loading}

                className="w-full py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"

              >

                {loading ? "Sending..." : "Send Message"}

              </button>


              {success &&

                <p className="text-green-600 text-center">

                  Message sent successfully

                </p>

              }

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}


/* ================= INPUT ================= */

function Input({ name, value, onChange, placeholder, error }) {

  return (

    <div>

      <input

        name={name}

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        className="w-full p-4 border rounded-xl"

      />

      {error &&

        <p className="text-red-500 text-sm mt-1">

          {error}

        </p>

      }

    </div>

  );

}


/* ================= CONTACT INFO ================= */

function ContactInfo({ icon: Icon, title, value }) {

  return (

    <div className="flex items-center gap-6 bg-white border p-6 rounded-2xl">

      <div className="bg-indigo-600 text-white p-4 rounded-xl">

        <Icon size={24} />

      </div>

      <div>

        <p className="text-gray-500">

          {title}

        </p>

        <p className="text-lg font-semibold">

          {value}

        </p>

      </div>

    </div>

  );

}
