import { useNavigate } from "react-router-dom";
import styles from "./PostList.module.css";

const Menu = () => {
   const navigate = useNavigate();

   return (
      <div className={styles.menu_container}>
         <button
            onClick={() => {
               navigate("/write");
            }}
            className={styles.menu_item}
         >
            write
         </button>
         <button
            onClick={() => {
               navigate("/write");
            }}
            className={styles.menu_item}
         >
            full
         </button>
      </div>
   );
};
export default Menu;
