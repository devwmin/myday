import styles from "./Form.module.css";

const Form = () => {
   return (
      <div className={`${styles.box} ${styles.center}`}>
         <div>
            <button>★</button>
            <button>★</button>
            <button>★</button>
            <button>★</button>
            <button>★</button>
         </div>
         <div>comment</div>
         <div>image</div>
      </div>
   );
};

export default Form;
