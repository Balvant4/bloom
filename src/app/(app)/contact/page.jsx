"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300">
            We'd love to hear from you. Reach out with any questions or just say
            hello!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <p className="text-slate-300">
                123 Hotel Limon Street, Cityville, IN
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <p className="text-slate-300">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <p className="text-slate-300">contact@yourdomain.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold text-cyan-300">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-cyan-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-cyan-300">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 bg-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-semibold px-6 py-2 rounded-xl w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
