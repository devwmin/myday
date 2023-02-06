const Detail = ({ data }) => {
   return (
      <>
         <span>★{data.rate || 0}</span>
         <span>{data.text}</span>
      </>
   );
};

export default Detail;
