import styles from "./Post.module.css";

const Post = ({ data, activeId }) => {
   if (data.imgFile) {
      console.log(data.imgFile);
   }
   return (
      <div className={`${styles.wrap} ${activeId === data.id && styles.active}`} data-id={data.id}>
         {activeId === data.id ? (
            <div>
               <span>★{data.rate || 0}</span>
               <span>{data.text}</span>
               <img src={data.imgFile} alt="img" />
            </div>
         ) : (
            <>
               <span>★{data.rate || 0}</span>
               <span>{data.text.length > 20 ? `${data.text.slice(0, 20)}...` : data.text}</span>
            </>
         )}
      </div>
   );
};
export default Post;
