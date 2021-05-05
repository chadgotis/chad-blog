import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <Seo title="Home" description="test description" />
  </Layout>
)

export default IndexPage
