import styels from "./Popup.module.css";
const Popup = ({ children, onClose }) => {
   return (
      <>
         <div className={styels.back} onClick={onClose}></div>
         <div className={styels.box}>{children}</div>
      </>
   );
};

export default Popup;
