import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          siteUrl
        }
      }
    }
  `);

  const template = title ? siteMetadata.titleTemplate : "%s";

  return (
    <Helmet titleTemplate={template}>
      <title>{title || siteMetadata.defaultTitle}</title>
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
