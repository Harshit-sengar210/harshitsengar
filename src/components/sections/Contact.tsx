"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/layout/Container";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-900"
    >
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent" />

      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-purple-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-purple-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-all">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400 mb-4">
              <a
                href="mailto:your.email@example.com"
                className="hover:text-purple-500 transition-colors"
              >
                your.email@example.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-all">
              <Phone className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 mb-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-purple-500 transition-colors"
              >
                +91 XXXX XXX XXX
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <div className="bg-gray-700/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-all">
              <MapPin className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400 mb-4">Your City, Country</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-md transition-all transform hover:-translate-y-1"
          >
            Send Me a Message <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Looking forward to collaborating with you!
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact; 