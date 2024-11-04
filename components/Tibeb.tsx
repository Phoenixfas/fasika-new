import { useEffect } from "react";
import useStore from "../store/store";
import styles from "../styles/Tibeb.module.css";

export default function Tibeb() {
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
    <div className={styles.container} onClick={mesobOpen ? setMesobOpen : null}>
      <img
        src="/images/Tilet.svg"
        alt="Tibeb"
        className={mesobOpen ? styles.tibebBlur : styles.tibeb}
      />
    </div>
  );
}
