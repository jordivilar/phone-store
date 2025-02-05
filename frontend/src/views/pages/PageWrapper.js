import React, { lazy, Suspense, useState, useEffect } from "react";

// Components
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function PageWrapper({ children }) {
   return (
      <>
         <Navbar />
         <Suspense fallback={<Loader />}>
            <main>{children}</main>
         </Suspense>
      </>
   );
}
