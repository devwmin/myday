import { Rating } from "react-simple-star-rating";

const Detail = ({ data }) => {
   return (
      <>
         <Rating initialValue={data.rating} readonly />
         <span>{data.comment}</span>
         <img src={data.file} alt="img" />
      </>
   );
};

export default Detail;
