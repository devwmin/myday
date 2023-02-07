import { useEffect, useRef } from "react";
import { OlMap } from "../../olmap/map";
import styles from "./Map.module.css";

const Map = ({ setMapObj }) => {
   //map node
   const mapRef = useRef();
   //create olmap
   useEffect(() => {
      if (mapRef.current) {
         const newMap = new OlMap(mapRef.current, [14135484.520473432, 4517831.549059131]);
         setMapObj(newMap);
      }
      return () => {
         setMapObj((prevMap) => {
            prevMap.clear();
            return null;
         });
      };
   }, [setMapObj]);
   return <div ref={mapRef} className={styles.map}></div>;
};

export default Map;
