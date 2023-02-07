import styles from "./Home.module.css";
import Post from "./Post";
import { useRef, useState } from "react";
import { ScrollBar } from "../common/ScrollBar";
import Popup from "../common/Popup";
import PostForm from "../common/PostForm";

const PostList = ({ datas, mapObj }) => {
   const [activeId, setActiveId] = useState();
   const [openPopup, setOpenPopup] = useState(false);
   const target = useRef();

   const itemClick = (e) => {
      const id = e.target.dataset.id;
      if (id) {
         setActiveId(id);
         mapObj.selectFeature(id);
         setOpenPopup(true);
      }
   };
   return (
      <div className={styles.list_container}>
         <ScrollBar>
            <div className={styles.post_wrap} onClick={itemClick} ref={target}>
               {datas && datas.length > 0 ? (
                  datas?.map((data) => <Post key={data.id} data={data} active={activeId === data.id} />)
               ) : (
                  <div className={`${styles.postbox}`}> nothing data </div>
               )}
            </div>
         </ScrollBar>
         {openPopup && (
            <Popup onClose={() => setOpenPopup(false)}>
               <PostForm data={datas.find((data) => data.id === activeId)} />
            </Popup>
         )}
      </div>
   );
};
export default PostList;
