import React from "react"
import useScript from "react-script-hook"
import ActiveCampaignForm from "../components/ActiveCampaignForm"

type ComedyProps = {
  location: Location
  title?: string
  children: React.ReactNode
}

const ActiveCampaign = () => {
  const [loading, error] = useScript({
    src: "https://jameshush.activehosted.com/f/embed.php?id=5",
    checkForExisting: true,
  })

  if (loading) return <h3>Loading Form...</h3>
  if (error) return <h3>Failed to load form: {error.message}</h3>

  return <div className="_form_5"></div>
}

const Comedy = ({ location }: ComedyProps) => {
  return (
    <nav className="bg-gold flex flex-col h-screen">
      <ul>
        <li className="content-center font-sofia-pro text-4xl w-full transition ease-in-out delay-400 text-white bg-navy border-white hover:bg-red border-4 p-6 pt-5">
          <a
            className="text-white"
            href="https://instagram.com/jamie.hush"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li className="font-sofia-pro text-4xl w-full transition ease-in-out delay-400 text-white bg-navy border-white hover:bg-red border-4 p-6 pt-5">
          <a
            className="text-white"
            href="https://www.youtube.com/channel/UCwLxVyCXYlqNgORz4uA1ykg/videos"
            target="_blank"
          >
            YouTube
          </a>
        </li>
        <li>
          <h1 className="text-center font-sofia-pro">
            Get notified for future shows and events!
          </h1>
        </li>
        <li>
          <ActiveCampaignForm
            showCopy={false}
            formId={5}
            or="7510aa1237d8e397d74f8b29cd067729"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Comedy
