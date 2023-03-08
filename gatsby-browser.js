import React from "react";
import Layout from "./src/layout/Layout";
import GlobalStyles from "./src/components/GlobalStyles";

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  );
};
