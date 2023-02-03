import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Write from "../routes/Write";
import Map from "./map/Map";

export const AppRouter = () => {
   const [mapObj, setMapObj] = useState();

   return (
      <BrowserRouter>
         <Map setMapObj={setMapObj} />
         <Routes>
            <Route path="/*" element={<Home mapObj={mapObj} setMapObj={setMapObj} />} />
            <Route path="/write" element={<Write mapObj={mapObj} />} />
         </Routes>
      </BrowserRouter>
   );
};
