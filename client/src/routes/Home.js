import { useEffect, useState } from "react";
import axios from "axios";
import { getTestData } from "../utils/data/data";
import PostList from "../components/home/PostList";

import { db } from "../firebase";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import Menu from "../components/home/Menu";

const Home = ({ mapObj }) => {
   const [posts, setPosts] = useState([]);
   //visible features
   const [visibles, setVisibles] = useState([]);

   const fetchData = async () => {
      const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
         const postArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
         }));
         setPosts(postArray);
      });

      // Stop listening to changes
      return unsubscribe;
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
         posts.forEach((post) => {
            mapObj.addFeature(post.id, post, post.coordinate[0], post.coordinate[1]);
         });
         setVisibles(mapObj.getVisibleFeatures().map((feature) => feature.value));
      }
   }, [mapObj, posts]);
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
         <PostList datas={visibles} mapObj={mapObj} />
         <Menu />
      </>
   );
};

export default Home;
