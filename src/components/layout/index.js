import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NProgress from 'nprogress'
import Navbar from "./navbar"
import Footer from "./footer"

import {GlobalStyle, ContainerLayout, MainContent} from '../common';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  NProgress.configure({ showSpinner: false });
  NProgress.start();
  NProgress.done();
  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout>
          <Navbar siteTitle={data.site.siteMetadata.title} />
        </ContainerLayout>
        <ContainerLayout>
          <main>{children}</main>
        </ContainerLayout>
      </MainContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
