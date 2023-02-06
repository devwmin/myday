import styles from "./Post.module.css";

const Post = ({ data, active }) => {
   return (
      <div className={`${styles.wrap} ${active && styles.active}`} data-id={data.id}>
         <span>★{data.rate || 0}</span>
         <span>{data.text.length > 20 ? `${data.text.slice(0, 20)}...` : data.text}</span>
      </div>
   );
};
export default Post;
