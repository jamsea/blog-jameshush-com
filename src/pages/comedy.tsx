import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ActiveCampaignForm from "../components/ActiveCampaignForm"
import Seo from "../components/seo"

const Comedy = () => {
  return (
    <nav className="bg-gold flex flex-col h-screen p-4">
      <Seo title="Social Media Links" />
      <ul className="text-center">
        <li>
          <StaticImage
            className="rounded-full"
            src="../images/profile-pic-casual.jpg"
            alt="James Hush"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            width={100}
            height={100}
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </li>
        <li>
          <h1 className="text-center font-sofia-pro">
            Get notified about future shows and events!
          </h1>
        </li>
        <li>
          <ActiveCampaignForm
            showCopy={false}
            formId={5}
            or="7510aa1237d8e397d74f8b29cd067729"
          />
        </li>
        <li className="text-center font-sofia-pro text-4xl w-full transition ease-in-out delay-400 text-white bg-navy border-white hover:bg-red border-4 p-6 pt-5">
          <a
            className="text-white text-center"
            href="https://instagram.com/jamie.hush"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li className="text-center font-sofia-pro text-4xl w-full transition ease-in-out delay-400 text-white bg-navy border-white hover:bg-red border-4 p-6 pt-5">
          <a
            className="text-white"
            href="https://www.youtube.com/channel/UCwLxVyCXYlqNgORz4uA1ykg/videos"
            target="_blank"
          >
            YouTube
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Comedy
