import * as React from "react"

import DailyIframe from "@daily-co/daily-js"

const DailyPage: React.FC = () => {
  const callFrame = DailyIframe.createFrame({
    showLeaveButton: true,
    iframeStyle: {
      position: "fixed",
      width: "100%",
      height: "100%",
    },
  })

  callFrame.join({ url: "https://jameshush.daily.co/jamestest" })

  return (
    <>
      <h1>Hi</h1>
    </>
  )
}

export default DailyPage
