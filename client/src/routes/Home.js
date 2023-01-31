import { useEffect, useState } from "react";
import axios from "axios";
import { getTestData } from "../utils/data/data";
import Postbox from "../components/home/Postbox";

const Home = ({ mapObj }) => {
   const [datas, setDatas] = useState([]);
   //visible features
   const [visibles, setVisibles] = useState([]);

   const fetchData = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const datas = await axios.get(`${apiUrl}/point`).catch((_) => getTestData());
      setDatas(datas);
   };
   // map move event
   useEffect(() => {
      const onMoveEnd = () => {
         setVisibles(mapObj.getVisibleFeatures().map((feature) => feature.value));
      };
      if (mapObj) {
         mapObj.on("moveend", onMoveEnd);
      }
      return () => {
         if (mapObj) {
            mapObj.un("moveend", onMoveEnd);
         }
      };
   }, [mapObj]);
   // fetch data
   useEffect(() => {
      if (mapObj) {
         fetchData();
      }
   }, [mapObj]);
   // display data
   useEffect(() => {
      if (mapObj) {
         mapObj.clearFeatures();
         datas.forEach((data) => {
            mapObj.addFeature(data.id, data, data.longitude, data.latitude);
         });
         setVisibles(mapObj.getVisibleFeatures().map((feature) => feature.value));
      }
   }, [mapObj, datas]);
   // unmount - clear features
   useEffect(() => {
      return () => {
         if (mapObj) {
            mapObj.clearFeatures();
         }
      };
   }, [mapObj]);

   return (
      <>
         <Postbox features={visibles} mapObj={mapObj} />
      </>
   );
};

export default Home;
