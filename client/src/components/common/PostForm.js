import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { insertData } from "../../utils/data/data";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

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
   const onSubmit = async (e) => {
      e.preventDefault();
      if (coordinate) {
         //insertData(rating, coordinate[0], coordinate[1], comment, file);
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
      <form onSubmit={onSubmit}>
         <Rating initialValue={rating} tooltipArray={tooltipArray} showTooltip {...ratingProps} />
         <div>
            {coordinate ? (
               <textarea placeholder="comment" onChange={(e) => setComment(e.target.value)}></textarea>
            ) : (
               <span>{comment}</span>
            )}
         </div>
         <div>
            {coordinate ? (
               <input
                  type="file"
                  alt="image"
                  placeholder="image"
                  accept="image/png, image/jpeg"
                  onChange={onFileChange}
               />
            ) : (
               <img src={file} alt="imgfile" />
            )}
         </div>
         <div>{coordinate && <input type="submit" value="submit" />}</div>
      </form>
   );
};

export default PostForm;
