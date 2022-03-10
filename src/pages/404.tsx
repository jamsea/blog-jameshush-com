import * as React from "react"
import { PageProps, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NotFoundQuery } from "../../graphql-types"

const NotFoundPage: React.FC<PageProps<NotFoundQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title || ""

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <article className="prose prose-james lg:prose-xl">
        <h1>404: Not Found</h1>
        <p>
          <Link to="/blog">Go back to blog</Link>
        </p>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
