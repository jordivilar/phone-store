import React, { lazy, Suspense, useState, useEffect } from "react";

// Pages
import PageWrapper from "../views/pages/PageWrapper";
import NotFound from "../views/pages/NotFound";

const LazyPhonesList = lazy(() => import("../views/pages/ProductsList"));
const LazyPhoneDetail = lazy(() => import("../views/pages/ProductDetail"));
const LazyShoppingCart = lazy(() => import("../views/pages/ShoppingCart"));

export const AppRoutes = [
   {
      path: "/",
      element: (
         <PageWrapper>
            <LazyPhonesList />
         </PageWrapper>
      ),
   },
   {
      path: "/detail/:id",
      element: (
         <PageWrapper>
            <LazyPhoneDetail />
         </PageWrapper>
      ),
   },
   {
      path: "/cart",
      element: (
         <PageWrapper>
            <LazyShoppingCart />
         </PageWrapper>
      ),
   },
   // 404
   { path: "*", element: <NotFound /> },
];
