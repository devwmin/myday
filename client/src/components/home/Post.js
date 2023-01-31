import { useState } from "react";
import styles from "./Post.module.css";

const Post = ({ features, mapObj }) => {
   const [ActiveFeatureId, setActiveFeatureId] = useState(-1);
   const itemClick = (e) => {
      const id = parseInt(e.target.dataset.id);
      if (!isNaN(id)) {
         setActiveFeatureId(id);
         mapObj.selectFeature(id);
      }
   };
   return (
      <div className={styles.post_wrap} onClick={itemClick}>
         {features && features.length > 0 ? (
            features?.map((feature) => (
               <div
                  className={`${styles.box} ${ActiveFeatureId === feature.id ? styles.active : ""}`}
                  key={feature.id}
                  data-id={feature.id}
               >
                  {feature.text.length > 20 ? `${feature.text.slice(0, 30)}...` : feature.text}
               </div>
            ))
         ) : (
            <div className={`${styles.box}`}> nothing data </div>
         )}
      </div>
   );
};
export default Post;
