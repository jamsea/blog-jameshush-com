import React from "react"
import Layout from "../components/layout"
import useScript from "react-script-hook"

type ComedyProps = {
  location: Location
  title?: string
  children: React.ReactNode
}

const Comedy = ({ location }: ComedyProps) => {
  const [loading, error] = useScript({
    src: "https://jameshush.activehosted.com/f/embed.php?id=5",
    checkForExisting: true,
  })

  if (loading) return <h3>Loading Form...</h3>
  if (error) return <h3>Failed to load form: {error.message}</h3>

  return (
    <Layout location={location} title={"Comedy Newsletter"}>
      <article className="prose prose-james lg:prose-xl">
        <div className="_form_5"></div>
      </article>
    </Layout>
  )
}

export default Comedy
