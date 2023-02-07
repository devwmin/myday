import React, { useEffect, useState } from "react";
import styles from "./ScrollBar.module.css";
export const ScrollBar = ({ children }) => {
   const [visible, setVisible] = useState(true);
   // scrollbar height
   const [height, setHeight] = useState(0);
   //thumb position
   const [thumb, setThumb] = useState(0);

   const setPosition = (element) => {
      setVisible(element.scrollHeight > element.clientHeight);
      setHeight(element.clientHeight);
   };
   useEffect(() => {
      if (children) {
         setPosition(children.ref.current);
      }
   }, [children]);
   useEffect(() => {
      const element = children.ref.current;
      const observer = new ResizeObserver((entries) => setPosition(element));
      if (children) {
         observer.observe(element);
      }
      return () => {
         if (children) {
            observer.disconnect(element);
         }
      };
   }, [children]);
   useEffect(() => {
      const element = children.ref.current;
      const onScroll = (e) => {
         const max = e.target.scrollHeight - e.target.clientHeight;
         const now = e.target.scrollTop;
         const per = (now * 100) / max;

         const s_p = ((height - 10) / 100) * per;
         setThumb(s_p);
      };
      if (children) {
         element.addEventListener("scroll", onScroll);
      }
      return () => {
         if (children) {
            element.removeEventListener("scroll", onScroll);
         }
      };
   }, [children, height]);

   return (
      <>
         {visible && (
            <div className={styles.scrollbar} style={{ height }}>
               <div className={styles.track}>
                  <div className={styles.thumb} style={{ transform: `translateY(${thumb}px)` }}></div>
               </div>
            </div>
         )}
         {children}
      </>
   );
};
