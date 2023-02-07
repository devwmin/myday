import { useEffect, useRef, useState } from "react";
import Marker from "../components/write/Marker";
import Popup from "../components/Popup";
import PostForm from "../components/PostForm";

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
               <PostForm coordinate={coordinate} />
            </Popup>
         )}
      </div>
   );
};

export default Write;
