import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

interface LayoutProps {
  location: Location
  title?: string
  children: React.ReactNode
}

const Layout = ({ location, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <StaticImage
          src="../images/james_hush_logo.svg"
          alt="James Hush Logo"
          placeholder="tracedSVG"
          height={111}
        />
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <StaticImage
          src="../images/james_hush_logo.svg"
          alt="James Hush Logo"
          placeholder="tracedSVG"
          height={111}
        />
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `}
        <a href="https://www.jameshush.com">James Hush</a>
      </footer>
    </div>
  )
}

export default Layout
