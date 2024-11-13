import { motion } from "framer-motion";
import style from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <motion.div
      className={style.profile}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <img src="https://avatars.githubusercontent.com/u/72998972?v=4" alt="Profile" />
      <div className={style.profileDetail}>
        <h3>Fasika Dagnachew</h3>
        <p>Full-Stack Developer / 3D Artist</p>
      </div>
    </motion.div>
  );
}
