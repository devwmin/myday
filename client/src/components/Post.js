import { useState } from "react";
import styles from "./Post.module.css";

const Post = ({ features, mapObj }) => {
   const [ActiveFeatureId, setActiveFeatureId] = useState("-1");
   const itemClick = (e) => {
      const id = e.target.dataset.id;
      if (id) {
         setActiveFeatureId(id);
         mapObj.selectFeature(id);
      }
   };
   return (
      <div className={styles.group} onClick={itemClick}>
         {features?.map((feature) => (
            <div
               className={`${styles.box} ${ActiveFeatureId == feature.id ? styles.active : ""}`}
               key={feature.id}
               data-id={feature.id}
            >
               {feature.text.length > 20 ? `${feature.text.slice(0, 30)}...` : feature.text}
            </div>
         ))}
      </div>
   );
};
export default Post;
