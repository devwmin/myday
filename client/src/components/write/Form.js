import styles from "./Form.module.css";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { insertData } from "../../utils/data/data";
import { useNavigate } from "react-router-dom";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const Form = ({ coordinate }) => {
   const navigate = useNavigate();
   const [rating, setRating] = useState(1);
   const tooltipArray = ["Terrible", "Bad", "Average", "Great", "Prefect"];
   const [comment, setComment] = useState("");
   const [file, setFile] = useState();

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
   const onSubmit = (e) => {
      e.preventDefault();
      insertData(rating, coordinate[0], coordinate[1], comment, file);
      navigate("/");
   };
   return (
      <div className={`${styles.container}`}>
         <form onSubmit={onSubmit}>
            <div className={`${styles.flex_center}`}>
               <Rating initialValue={rating} onClick={(v) => setRating(v)} tooltipArray={tooltipArray} showTooltip />
            </div>
            <div className={`${styles.flex_center} ${styles.comment_wrap}`}>
               <textarea
                  className={`${styles.comment}`}
                  placeholder="comment"
                  onChange={(e) => setComment(e.target.value)}
               ></textarea>
            </div>
            <div className={`${styles.flex_center} ${styles.img_wrap}`}>
               {file ? (
                  <img src={file} alt="preview" style={{ width: "50px" }} />
               ) : (
                  <input
                     className={`${styles.img_input}`}
                     type="file"
                     alt="image"
                     placeholder="image"
                     accept="image/png, image/jpeg"
                     onChange={onFileChange}
                  />
               )}
            </div>
            <div className={`${styles.flex_center}`}>
               <input type="submit" value="submit" />
            </div>
         </form>
      </div>
   );
};

export default Form;
