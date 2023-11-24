import React from "react";
import "./Skills.css";
import smartBrain from "../assets/smartbrain.png";
import nike from "../assets/nike.png";
import apple from "../assets/apple.png";
import { motion } from "framer-motion";

const Skills = () => {
  // const { scrollYProgress } = useScroll();

  return (
    <div className="skills">
      <motion.h1
        initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="main-skill-header"
      >
        Projects
      </motion.h1>
      <motion.div
        // style={{ scaleX: scrollYProgress, transition: "scaleX 0.3s ease" }}
        // initial={{opacity: 0}}
        // whileInView={{opacity: '1'}}
        // exit={{ scaleX: 0 }}
        initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="skills-wrapper"
      >
        <motion.div
          className="skills-1 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={nike} alt="" className="common-skill-img" />
          <h1 className="skills-header">Nike Clone</h1>
          {/* <h4>
            Created a full-stack web application, combining React for the
            frontend and Express.js with MongoDB for the backend. Implemented
            user authentication by creating signup and signin forms. Utilized
            the bcrypt password hashing algorithm with 10 salt rounds & secure..
          </h4> */}
          <div className="need-skills">
            <h4>React</h4>
            <h4>Express</h4>
            <h4>Node</h4>
            <h4>MongoDb</h4>
            <h4>bCrypt</h4>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="skills-2 common-skills"
        >
          <img src={smartBrain} className="common-skill-img" alt="" />
          <h1 className="skills-header">SmartBrain</h1>
          {/* <h4>
            Designed and developed For The Detect Face From The Images Using
            artificial intelligence With Clarifai Api & React.js. Implemented
            responsive design using Bootstrap and added custom styles with
            Tachyons. Integrated a SignIn & Signup form with Node..
          </h4> */}
          <div className="need-skills">
            <h4>React</h4>
            <h4>Express</h4>
            <h4>Node</h4>
            <h4>PostgresSql</h4>
            <h4>bCrypt</h4>
          </div>
        </motion.div>
        <motion.div
          className="skills-3 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={apple} alt="" className="common-skill-img" />
          <h1 className="skills-header">Apple Clone</h1>
          {/* <h4>
            Built a Apple Website Clone Using react js & css. Website clone is
            responsive, ensuring a seamless user experience across various
            devices and screen sizes. creating slider using
            react-responsive-carousel from npm package ...
          </h4> */}
          <div className="need-skills">
            <h4>React</h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
