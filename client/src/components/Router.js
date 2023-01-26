import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};
