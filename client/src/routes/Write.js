import { useEffect, useRef, useState } from "react";
import styles from "./Write.module.css";
import Marker from "../components/write/Marker";
import Form from "../components/write/Form";

const Write = ({ mapObj }) => {
   const markerRef = useRef();
   const [coordinate, setCoordinate] = useState();
   const [writing, setWrting] = useState(false);
   //pick a place
   useEffect(() => {
      const onClick = (e) => {
         setCoordinate(e.coordinate);
      };
      if (mapObj) {
         mapObj.on("click", onClick);
      }
      return () => {
         if (mapObj) {
            mapObj.un("click", onClick);
            mapObj.removeMarker();
         }
      };
   }, [mapObj]);
   useEffect(() => {
      if (mapObj && coordinate) {
         mapObj.removeMarker();
         mapObj.addMarker(markerRef.current, coordinate);
      }
   }, [mapObj, coordinate]);

   const onClick = (e) => {
      setWrting(false);
   };

   return (
      <div>
         {coordinate && <Marker markerRef={markerRef} onClick={() => setWrting(true)} />}
         {writing && (
            <>
               <div className={styles.background} onClick={onClick}></div>
               <Form />
            </>
         )}
      </div>
   );
};

export default Write;
