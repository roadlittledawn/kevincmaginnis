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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <link
      key="open-sans"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap"
    />,
  ]);
};
