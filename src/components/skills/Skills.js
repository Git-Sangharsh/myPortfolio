import React from "react";
import "./Skills.css";
import smartBrain from "../assets/smartbrain.png";
import nike from "../assets/nike.png";
import apple from "../assets/apple.png";
import Rolex from "../assets/rolex69.png"
import { motion } from "framer-motion";
import github from "../assets/github.png";
import task from "../assets/taskimg.png";


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
        initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="skills-wrapper"
      >
        {/* //! first project */}
        <motion.div
          className="skills-1 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <a href="https://nike-frontend69.onrender.com/">
            <img src={task} alt="" className="common-skill-img" />
            <h1 className="skills-header">Task Manager</h1>
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
              <h4>MERN</h4>

              <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
            </div>
            <div className="need-skills">
              <h4>Redux State</h4>
              <h4>WEB-TOKEN</h4>
              <h4>React-Router-Dom</h4>
              <h4>MongoDb</h4>
            </div>
          </a>
        </motion.div>
        <motion.div
          className="skills-1 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <a href="https://nike-frontend69.onrender.com/">
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
              <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
            </div>
          </a>
        </motion.div>
        <motion.div
          className="skills-1 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <a href="https://rolex-v4tu.onrender.com/">
            <img src={Rolex} alt="" className="common-skill-img" />
            <h1 className="skills-header">Rolex Watch</h1>
            <div className="need-skills">
              <h4>React</h4>
              <h4>Framer-Motion</h4>
              <h4>CSS</h4>
              <h4>Swiper</h4>
              <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="skills-2 common-skills"
        >
          <a href="https://github.com/Git-Sangharsh/mainSmart-Brain">
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
              <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
            </div>
          </a>
        </motion.div>
        <motion.div
          className="skills-3 common-skills"
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <a href="https://apple-clone-wine.vercel.app/">
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
              <img
                  src={github}
                  alt="instagram"
                  className="link"
                  style={{ borderRadius: "100px" }}
                />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
