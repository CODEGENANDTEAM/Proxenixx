'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About(){
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Agency Selection Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-xl shadow-xl max-w-6xl mx-auto my-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-md">
                <h2 className="text-5xl font-bold mb-3">Not sure how to choose an agency?</h2>
                <p className="text-gray-700 text-base">
                  At CodeGen we always find a way, also, we are courageously honest and we most certainly give a damn.
                </p>
              </div>
              <div className="w-full md:w-3/5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/desktop.png" // Replace with your desktop image
                    alt="Developer working at desk"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Director Insights Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto my-24 px-8"
          >
            <div className="mb-8">
              <motion.span 
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block p-3 bg-gray-100 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-xl-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </motion.span>
            </div>

            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl font-bold mb-6"
            >
              Insights from Our Director
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 text-2xl mb-10 max-w-3xl mx-auto"
            >
              Hear directly from our Agency Director about how Proxennix is shaping the future of digital design and innovation.
            </motion.p>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mb-6"
            >
              {/* Replace with your signature image */}
              <Image
                src="/images/sign.png"
                alt="Director's Signature"
                width={200}
                height={100}
                className="h-32 w-auto object-contain"
                quality={100}
              />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-6xl-gray-500"
            >
              Pratham Bulchandani
            </motion.p>
          </motion.div>

          {/* Stats Counter Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-24 md:gap-40 my-24 px-4"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">80+</h3>
              <p className="text-gray-500 text-2xl mt-2">Clients</p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">25+</h3>
              <p className="text-gray-500 text-2xl mt-2">Projects</p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold">450+</h3>
              <p className="text-gray-500 text-2xl mt-2">Designs</p>
            </motion.div>
          </motion.div>

          {/* Meet the Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center my-32 px-4"
          >
            <h2 className="text-4xl font-bold mb-4">Meet the Minds Behind Proxenixx</h2>
            <p className="text-gray-600 text-xl mb-20 max-w-3xl mx-auto">
              Discover the talented individuals working at Proxenixx , each dedicated to pushing the boundaries of digital design.
            </p>

            {/* Team Member */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/face.png" // Replace with your profile image
                  alt="Pratham Bulchandani"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mb-6 object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-medium">Pratham Bulchandani</h3>
              <p className="text-lg text-gray-500 mb-6">Founder</p>

              <div className="flex gap-5">
                <motion.a 
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                  transition={{ duration: 0.2 }}
                  href="https://x.com/CodegenTeam" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "#0077B5" }}
                  transition={{ duration: 0.2 }}
                  href="https://www.linkedin.com/in/pratham-bulchandani-2112b5268" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

