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
      <h1>
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
      <Link to="/">
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
    <div
      // className="min-h-screen bg-sand py-8 flex flex-col justify-center relative overflow-hidden lg:py-12"
      className="prose prose-navy relative w-full px-6 py-12 bg-white shadow-xl md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28"
      data-is-root-path={isRootPath}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `}
        <a href="https://www.jameshush.com/">James Hush</a>
      </footer>
    </div>
  )
}

export default Layout
