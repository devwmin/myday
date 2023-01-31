import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Test from "../routes/Test";
import Write from "../routes/Write";
import Map from "./Map";

export const AppRouter = () => {
   const [mapObj, setMapObj] = useState();

   return (
      <BrowserRouter>
         <Map setMapObj={setMapObj} />
         <Routes>
            <Route path="/*" element={<Home mapObj={mapObj} setMapObj={setMapObj} />} />
            <Route path="/write" element={<Write mapObj={mapObj} />} />
            <Route path="/test" element={<Test />} />
         </Routes>
      </BrowserRouter>
   );
};
