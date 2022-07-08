import * as React from "react"

// If anyone knows of a better way to do this, please make a pull request 🤷
function renderActiveCampaignTracking() {
  if (process.env.NODE_ENV !== `production` && process.env.NODE_ENV !== `test`)
    return

  return `(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
    vgo('setAccount', '651138045');
    vgo('setTrackByDefault', true);

    vgo('process');`
}

const postBodyComponents = [
  <script
    type="text/javascript"
    key={`gatsby-plugin-active-campaign`}
    dangerouslySetInnerHTML={{ __html: renderActiveCampaignTracking() }}
  />,
]

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(postBodyComponents)
}
