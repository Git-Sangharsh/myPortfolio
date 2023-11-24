import React from "react";
import "./Do.css";
import do1 from "../assets/do1.png";
import do2 from "../assets/do2.png";
import do3 from "../assets/do3.png";
import { Element } from "react-scroll";

// import do4 from "../assets/do4.jpg";
import { motion } from "framer-motion";

const Do = () => {
  return (
    <Element>
      <div className="do">
        <h1 className="whatdo">What I Do ?</h1>
        <motion.div
          className="do-wrapper"
          // initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
          // whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          // transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={do1} alt="" />
            <div className="another-div">
              <h3>MERN Stack</h3>
              <h1>
                MERN stack technologies to create end-to-end web applications
                with dynamic and responsive user interfaces.
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img src={do2} alt="" />
            <div className="another-div">
              <h3>Front-End Technologies</h3>
              <h1>
                Utilize HTML5, CSS3 (including Flexbox and Grid), and React.js
                for building visually appealing and interactive front-end
                experiences.
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <img src={do3} alt="" />
            <div className="another-div">
              <h3>Build and Manage Databases</h3>
              <h1>
                Work with both MongoDB and PostgreSQL for efficient data storage
                and retrieval, tailoring solutions based on project
                requirements.
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <img src={do1} alt="" />
            <div className="another-div">
              <h3>Server-Side Development</h3>
              <h1>
                Develop server-side logic using Node.js and Express.js, creating
                RESTful APIs to handle HTTP requests and facilitate
                communication between the front end and databases.
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <img src={do2} alt="" />
            <div className="another-div">
              <h3>Effective State Management</h3>
              <h1>
                Implement Redux for centralized and predictable state management
                in large-scale applications, facilitating seamless data flow and
                interaction.
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="common-do"
            initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
            <img src={do3} alt="" />
            <div className="another-div">
              <h3>Full-Stack Deployment and Collaboration</h3>
              <h1>
                Deploy applications on cloud platforms (e.g., Heroku, AWS) and
                collaborate effectively using Git and GitHub for version control
                in team environments.
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Do;
