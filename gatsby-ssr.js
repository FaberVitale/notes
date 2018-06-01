/* from https://github.com/mui-org/material-ui/blob/master/examples/gatsby/gatsby-ssr.js */
/* eslint-disable react/no-danger */
import React from "react";
import { renderToString } from "react-dom/server";
import { JssProvider } from "react-jss";
import getPageContext from "./src/getPageContext";
import CleanCss from "clean-css";

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        pageContext
      })}
    </JssProvider>
  );

  const minifier = new CleanCss({});

  const minified = minifier.minify(pageContext.sheetsRegistry.toString())
    .styles;

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: minified
      }}
    />
  ]);
};
