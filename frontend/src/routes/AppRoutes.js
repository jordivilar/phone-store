import React, { lazy } from "react";

// Pages
import PageWrapper from "../views/pages/PageWrapper";
import NotFound from "../views/pages/NotFound";

const LazyProductList = lazy(() => import("../views/pages/ProductsList"));
const LazyProductDetail = lazy(() => import("../views/pages/ProductDetail"));
const LazyCart = lazy(() => import("../views/pages/Cart"));

export const AppRoutes = [
   {
      path: "/",
      element: (
         <PageWrapper>
            <LazyProductList />
         </PageWrapper>
      ),
   },
   {
      path: "/detail/:id",
      element: (
         <PageWrapper>
            <LazyProductDetail />
         </PageWrapper>
      ),
   },
   {
      path: "/cart",
      element: (
         <PageWrapper>
            <LazyCart />
         </PageWrapper>
      ),
   },
   // 404
   { path: "*", element: <NotFound /> },
];
