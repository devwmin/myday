import { useEffect, useRef, useState } from "react";
import { OlMap } from "./olmap";

export const Map = () => {
   const [mapObj, setMapObj] = useState();
   const mapRef = useRef();

   useEffect(() => {
      if (mapRef.current) {
         const newMap = new OlMap(mapRef.current);
         setMapObj(newMap);
      }
   }, [mapRef]);

   return <div ref={mapRef} style={{ width: "500px", height: "500px" }}></div>;
};
