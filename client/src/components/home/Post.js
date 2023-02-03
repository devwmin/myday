import styles from "./Post.module.css";

const Post = ({ feature, activeId }) => {
   return (
      <div className={`${styles.box} ${activeId === feature.id ? styles.active : ""}`} data-id={feature.id}>
         <span>★{feature.rate || 0}</span>
         <span>{feature.text.length > 20 ? `${feature.text.slice(0, 20)}...` : feature.text}</span>
      </div>
   );
};
export default Post;
