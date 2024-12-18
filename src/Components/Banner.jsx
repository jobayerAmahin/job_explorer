import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "motion";
import banner1 from "../assets/BannerImages/banner1.jpeg";
import banner2 from '../assets/BannerImages/banner2.jpeg'
const Banner = () => {
  return (
    <div>
      <div class="hero bg-base-200 min-h-96">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={banner1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              class="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600 shadow-2xl"
            />
            <motion.img
              src={banner2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              class="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-600 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              class="text-5xl font-bold"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#000000", "#731ccf"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                jobs
              </motion.span>{" "}
              for <br /> enthusiasts!
            </motion.h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
