import { useNavigate } from "react-router-dom";
import styles from "./Postbox.module.css";
import Post from "./Post";

const Postbox = ({ features, mapObj }) => {
   const navigate = useNavigate();
   const onClick = () => {
      navigate("/write");
   };
   return (
      <div className={styles.left_top}>
         <Post features={features} mapObj={mapObj} />
         <div className={styles.btn_wrap}>
            <button onClick={onClick} className={styles.btn}>
               +
            </button>
         </div>
      </div>
   );
};
export default Postbox;
