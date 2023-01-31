import styles from "./Marker.module.css";

const Marker = ({ markerRef, onClick }) => {
   return (
      <div className={styles.wrap} ref={markerRef}>
         <div className={styles.box} onClick={onClick}>
            like this place!
         </div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
               style={{ fill: "#3672b9" }}
               d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
         </svg>
      </div>
   );
};
export default Marker;
