import React from "react"
import { Script } from "gatsby"
import Layout from "../components/layout"

type BugFunnelProps = {
  location: Location
  title?: string
  children: React.ReactNode
}

const BugFunnel = ({ location }: BugFunnelProps) => {
  return (
    <Layout location={location} title={"bug funnel"}>
      <article className="prose prose-james lg:prose-xl">
        <p className="_form_14"></p>
        <Script
          src="https://jameshush.activehosted.com/f/embed.php?id=14"
          type="text/javascript"
        ></Script>
        <h1 className="font-sofia-pro">"We don't deploy on Fridays."</h1>
        <p>
          Have you heard this before? I used to feel the same way. Until we had
          to push an update to Superbowl.com during the Super Bowl.
        </p>
        <p>
          Since then, I've taken what I've learned and applied it at multiple
          companies. I've taken teams from deploying for four hours with three
          people, to deploying three times a day in no time. With less outages.
        </p>
        <p>
          Sign up today and I'll send you an email once a week with each step I
          apply to every company I help. I believe we all have the time today to
          do proactive work as engineers, we just need to figure out what to
          focus on first.
        </p>
      </article>
    </Layout>
  )
}

export default BugFunnel
