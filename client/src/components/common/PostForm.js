import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import styles from "./Common.module.css";

const PostForm = ({ coordinate, data }) => {
   const [rating, setRating] = useState(data?.rating || 2);
   const ratingProps = coordinate ? { onClick: (v) => setRating(v) } : { readonly: true };
   const tooltipArray = ["Terrible", "Bad", "Average", "Great", "Prefect"];

   const [comment, setComment] = useState(data?.comment || "");
   const [file, setFile] = useState(data?.file);
   const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

   const navigate = useNavigate();
   const onFileChange = (e) => {
      const {
         target: { files },
      } = e;
      const validImageFiles = Array.from(files).filter((file) => file.type.match(imageTypeRegex));
      if (!validImageFiles) return;

      const file = validImageFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => {
         setFile(e.target.result);
      };
      reader.readAsDataURL(file);
   };
   const onClick = async (e) => {
      console.log("submit");
      e.preventDefault();
      if (coordinate) {
         try {
            await addDoc(collection(db, "posts"), {
               rating,
               coordinate,
               comment,
               file: file ? file : "",
            });
         } catch (e) {
            console.log(e);
         }
         navigate("/");
      }
   };
   return (
      <div className={styles.form}>
         <Rating initialValue={rating} tooltipArray={tooltipArray} showTooltip {...ratingProps} />
         <div className={styles.form_comment}>
            {coordinate ? (
               <textarea rows="5" placeholder="comment" onChange={(e) => setComment(e.target.value)}></textarea>
            ) : (
               <span>{comment}</span>
            )}
         </div>
         <div className={styles.form_file}>
            {coordinate ? (
               file ? (
                  <img src={file} alt="preview" />
               ) : (
                  <input
                     type="file"
                     alt="image"
                     placeholder="image"
                     accept="image/png, image/jpeg"
                     onChange={onFileChange}
                  />
               )
            ) : (
               <img src={file} alt="imgfile" />
            )}
         </div>
         {coordinate && (comment || file) && (
            <div className={styles.form_btn_wrap} title="click">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                     style={{ fill: "#333333" }}
                     d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
               </svg>
            </div>
         )}
      </div>
   );
};

export default PostForm;
