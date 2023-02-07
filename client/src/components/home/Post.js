import styles from "./Home.module.css";

const Post = ({ data, active }) => {
   return (
      <div className={`${styles.postbox} ${active && styles.active}`} data-id={data.id}>
         <span>★{data.rating || 0}</span>
         <span>{data.comment.length > 20 ? `${data.comment.slice(0, 20)}...` : data.comment}</span>
      </div>
   );
};
export default Post;
