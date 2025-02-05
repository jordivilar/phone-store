import React from "react";

import { specParagraph } from "../../../styles/Text.styles";

export default function Specifications({ data }) {
   return (
      <>
         <table>
            <tbody>
               <tr>
                  <td>BRAND</td>
                  <td>
                     <specParagraph>{data.brand}</specParagraph>
                  </td>
               </tr>
               <tr>
                  <td>NAME</td>
                  <td>{data.name}</td>
               </tr>
               <tr>
                  <td>DESCRIPTION</td>
                  <td>{data.description}</td>
               </tr>
               <tr>
                  <td>SCREEN</td>
                  <td>{data.specs.screen}</td>
               </tr>
               <tr>
                  <td>RESOLUTION</td>
                  <td>{data.specs.resolution}</td>
               </tr>
               <tr>
                  <td>PROCESSOR</td>
                  <td>{data.specs.processor}</td>
               </tr>
               <tr>
                  <td>MAIN CAMERA</td>
                  <td>{data.specs.mainCamera}</td>
               </tr>
               <tr>
                  <td>SELFIE CAMERA</td>
                  <td>{data.specs.selfieCamera}</td>
               </tr>
               <tr>
                  <td>BATTERY</td>
                  <td>{data.specs.battery}</td>
               </tr>
               <tr>
                  <td>OS</td>
                  <td>{data.specs.os}</td>
               </tr>
               <tr>
                  <td>SCREEN REFRESH RATE</td>
                  <td>{data.specs.screenRefreshRate}</td>
               </tr>
            </tbody>
         </table>
      </>
   );
}
