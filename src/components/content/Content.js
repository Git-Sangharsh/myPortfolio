import React from "react";
import "./Content.css";
import { motion } from "framer-motion";
// import logo69 from "../assets/logo3.jpg";

const Content = () => {
  return (
    <div className="content">
      <div
        className="content-wrapper"
      //   style={{ backgroundImage: `url(${logo69})`,
      // backgroundSize:'40%' }}
      >
        <motion.h3
          className="hello-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
        >
          Hello,
        </motion.h3>
        <motion.div
          className="name-holder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          <motion.h1
            className="iam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
          >
            I'm
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className="namess"
          >
            Sangharsh Motghare 🚀
          </motion.h1>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, ease: "easeIn" }}
          className="web"
        >
          Full Stack Web Developer
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 8, ease: "easeIn" }}
          className="objective"
        >
          Recent graduate with a strong foundation in front-end and back-end web
          development technologies, Eager to leverage my skills and knowledge to
          contribute to a dynamic web development team.
        </motion.h1>
      </div>
    </div>
  );
};

export default Content;
