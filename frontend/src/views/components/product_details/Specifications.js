import React from "react";

import { SmText } from "../../../styles/Text.styles";

export default function Specifications({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <SmText>BRAND</SmText>
            </td>
            <td>
              <SmText>{data.brand}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>NAME</SmText>
            </td>
            <td>
              <SmText>{data.name}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>DESCRIPTION</SmText>
            </td>
            <td>
              <SmText>{data.description}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>SCREEN</SmText>
            </td>
            <td>
              <SmText>{data.specs.screen}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>RESOLUTION</SmText>
            </td>
            <td>
              <SmText>{data.specs.resolution}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>PROCESSOR</SmText>
            </td>
            <td>
              <SmText>{data.specs.processor}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>MAIN CAMERA</SmText>
            </td>
            <td>
              <SmText>{data.specs.mainCamera}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>SELFIE CAMERA</SmText>
            </td>
            <td>
              <SmText>{data.specs.selfieCamera}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>BATTERY</SmText>
            </td>
            <td>
              <SmText>{data.specs.battery}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>OS</SmText>
            </td>
            <td>
              <SmText>{data.specs.os}</SmText>
            </td>
          </tr>
          <tr>
            <td>
              <SmText>SCREEN REFRESH RATE</SmText>
            </td>
            <td>
              <SmText>{data.specs.screenRefreshRate}</SmText>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
