import { useNavigate } from "react-router-dom";
import styles from "./Postbox.module.css";
import Post from "./Post";
import { useRef, useState } from "react";
import { ScrollBar } from "./ScrollBar";

const Postbox = ({ features, mapObj }) => {
   const navigate = useNavigate();
   const [activeId, setActiveId] = useState(-1);
   const target = useRef();

   const onClick = () => {
      navigate("/write");
   };
   const itemClick = (e) => {
      const id = parseInt(e.target.dataset.id);
      if (!isNaN(id)) {
         setActiveId(id);
         mapObj.selectFeature(id);
      }
   };
   return (
      <div className={styles.left_top}>
         <ScrollBar>
            <div className={styles.post_wrap} onClick={itemClick} ref={target}>
               {features && features.length > 0 ? (
                  features?.map((feature) => <Post key={feature.id} feature={feature} activeId={activeId} />)
               ) : (
                  <div className={`${styles.box}`}> nothing data </div>
               )}
            </div>
         </ScrollBar>
         <div className={styles.btn_wrap}>
            <button onClick={onClick} className={styles.btn}>
               +
            </button>
         </div>
      </div>
   );
};
export default Postbox;
