import { useNavigate } from "react-router-dom";
import styles from "./PostList.module.css";
import Post from "./Post";
import { useRef, useState } from "react";
import { ScrollBar } from "./ScrollBar";
import Popup from "../Popup";
import Detail from "./Detail";

const PostList = ({ datas, mapObj }) => {
   const navigate = useNavigate();
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
      <div className={styles.left_top}>
         <ScrollBar>
            <div className={styles.post_wrap} onClick={itemClick} ref={target}>
               {datas && datas.length > 0 ? (
                  datas?.map((data) => <Post key={data.id} data={data} active={activeId === data.id} />)
               ) : (
                  <div className={`${styles.box}`}> nothing data </div>
               )}
            </div>
         </ScrollBar>
         {openPopup && (
            <Popup onClose={() => setOpenPopup(false)}>
               <Detail data={datas.find((data) => data.id === activeId)} />
            </Popup>
         )}
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
