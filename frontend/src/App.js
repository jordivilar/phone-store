import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {AppRoutes.map((route, index) => (
               <Route key={index} path={route.path} element={route.element} />
            ))}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
