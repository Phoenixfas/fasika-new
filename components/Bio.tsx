import { motion } from "framer-motion";
import style from "../styles/Bio.module.css";

export default function Bio() {
  return (
    <motion.div
      className={style.bio}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className={style.bioBox}>
        <h3>Work</h3>
        <p>
          I'm Fasika Dagnachew, an innovative Full-Stack Developer with a strong background in building responsive and dynamic web applications. With expertise in both front-end and back-end technologies, I am dedicated to creating efficient and visually engaging digital solutions.
        </p>
      </div>
      <div className={style.bioBox}>
        <h3>Bio</h3>
        <p>
          I’m a passionate developer based in Addis Ababa, Ethiopia, with experience across various industries, including tourism, events, and logistics. My journey began in front-end development and evolved into full-stack development, allowing me to bring comprehensive solutions to my clients. Recently, I held the role of Chief Technology Officer (CTO) at Afriopia Unified Solutions, where I led a team of developers and played a critical role in project success.
        </p>
      </div>
      
      <div className={style.bioBox}>
        <h3>Proficiency</h3>
        <p className={style.skill}>
          Html, CSS, Javascript, React, React-Native, Node, Express, MongoDB, GraphQL, Next.js, Three.js, Blender, TypeScript, Tailwindcss 
        </p>
      </div>
      {/* <div className={style.bioBox}>
        <h3>I ❤</h3>
        <p>
          Music, Watching Movies, Playing Games, Photography, 3d Animating,
          Coding
        </p>
      </div> */}
    </motion.div>
  );
}
