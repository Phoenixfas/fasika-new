'use client'
import { useState, useEffect } from "react";
import useStore from "../store/store";
import { motion, AnimatePresence } from "framer-motion";
import style from "../styles/Modal.module.css";
import projects from "../data/projects";
import Project from "./Project";
import Profile from "./Profile";
import Bio from "./Bio";
import Socials from "./Socials";
import Message from "./Message";
// import Hero from "./New/Hero";
// import About from "./New/About";
// import Portfolio from "./New/Portfolio";
// import Contact from "./New/Contact";
// import Services from "./New/Services";

const variants = {
  hidden: {
    y: -80,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      y: { bounce: 0 },
    },
  },
  exit: {
    y: -80,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Modal() {
  const modalVisible = useStore((state: any) => state.modalVisible);

  const setMesobOpen = useStore((state: any) => state.setMesobOpen);
  const mesobOpen = useStore((state: any) => state.mesobOpen);

  const setModalVisible = useStore((state: any) => state.setModalVisible);

  useEffect(() => {
    const toggle = () => {
      mesobOpen ? null : setModalVisible(false);
    };
    toggle();
  }, [mesobOpen]);

  return (
    <>
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            className={style.modal}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={style.closeBtn}
              onClick={mesobOpen ? setMesobOpen : null}
              whileHover={{ backgroundColor: "#444" }}
              whileTap={{ backgroundColor: "#666" }}
            >
              <img src="/images/menu/close.png" alt="close" />
            </motion.div>


            <motion.div
              className={style.header}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <h3>Welcome to my portfolio</h3>
            </motion.div>
            <Profile />
            <Bio />
            <h3> Projects Done </h3>
            <div className={style.container}>
              {projects.map((project) => (
                <Project key={project.id} id={project.id}  project={project} />
              ))}
            </div>
            <hr
              style={{
                width: "80%",
                border: "none",
                borderTop: "1px solid #777",
              }}
            />
            <h3> Get In Touch </h3>
            <Message />
            <Socials />


            {/* <Hero />
            <About />
            <Portfolio />
            <Services />
            <Contact /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
