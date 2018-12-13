import React from "react";
import Helmet from "react-helmet";

const SiteMetadata = ({ title }) => (
  <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
    <html lang="en" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <meta name="docsearch:version" content="2.0" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
    />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />

    <meta name="twitter:card" content="summary" />
  </Helmet>
);

export default SiteMetadata;
