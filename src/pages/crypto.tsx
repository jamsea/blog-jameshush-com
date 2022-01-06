import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"

const Crypto: React.FC<PageProps> = ({ location }) => {
  const [tokenId, setTokenId] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    console.log(`Form submitted, ${tokenId}`)

    fetch(
      `https://gateway.pinata.cloud/ipfs/QmYC5Z8sT5eKWbWkPgtFxp4kg7bDwbADP8oKpWzyXwRGYg/${tokenId}`
    )
      .then(response => response.json())
      .then(data => {
        const tokens = data.attributes.filter(
          (a: { trait_type: boolean; value: string }) =>
            (a.trait_type = "Soon" && a.value === "1")
        )
        console.log("HIIIIIIII", tokens)

        setResult(
          tokens.length === 0
            ? "No tokens found with trait_type Soon and value === 1"
            : tokens
        )
      })
  }

  return (
    <Layout location={location} title={"hi"}>
      <Seo title="Crypto" />
      <h1>Crypto</h1>
      <form
        className="bg-gold flex items-center flex-col"
        onSubmit={handleSubmit}
      >
        <label className="mb-2">Token Id</label>
        <input
          className="w-full border-navy border-2"
          onChange={e => setTokenId(e.target.value)}
          value={tokenId}
        ></input>
        <button
          className="text-4xl w-full transition ease-in-out delay-400 text-white bg-red border-white hover:bg-navy border-4 p-6 pt-5"
          type="submit"
        >
          Click to submit
        </button>
      </form>

      <h1>Results</h1>
      <p>{result}</p>
    </Layout>
  )
}

export default Crypto
