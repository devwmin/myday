import { useEffect, useRef, useState } from "react";
import Marker from "../components/write/Marker";
import Form from "../components/write/Form";
import Popup from "../components/Popup";

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
   return (
      <div>
         {coordinate && <Marker markerRef={markerRef} onClick={() => setWrting(true)} />}
         {writing && (
            <Popup onClose={() => setWrting(false)}>
               <Form coordinate={coordinate} />
            </Popup>
         )}
      </div>
   );
};

export default Write;
