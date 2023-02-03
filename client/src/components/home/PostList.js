import { useNavigate } from "react-router-dom";
import styles from "./PostList.module.css";
import Post from "./Post";
import { useRef, useState } from "react";
import { ScrollBar } from "./ScrollBar";

const PostList = ({ datas, mapObj }) => {
   const navigate = useNavigate();
   const [activeId, setActiveId] = useState(-1);
   const target = useRef();

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
               {datas && datas.length > 0 ? (
                  datas?.map((data) => <Post key={data.id} data={data} activeId={activeId} />)
               ) : (
                  <div className={`${styles.box}`}> nothing data </div>
               )}
            </div>
         </ScrollBar>
         <div className={styles.btn_wrap}>
            <button
               onClick={() => {
                  navigate("/write");
               }}
               className={styles.btn}
            >
               +
            </button>
         </div>
      </div>
   );
};
export default PostList;
