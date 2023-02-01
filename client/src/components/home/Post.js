import styles from "./Post.module.css";

const Post = ({ feature, activeId }) => {
   return (
      <div className={`${styles.box} ${activeId === feature.id ? styles.active : ""}`} data-id={feature.id}>
         {feature.text.length > 20 ? `${feature.text.slice(0, 30)}...` : feature.text}
      </div>
   );
};
export default Post;
