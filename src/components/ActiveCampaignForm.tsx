import React, { useState } from "react"

export default function ActiveCampaignForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    const t = event.target as HTMLFormElement
    const data = new FormData(t)
    fetch("https://jameshush.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(res => {
        console.log(JSON.stringify(res, undefined, 4))
        setFormSubmitted(true)
        setTimeout(() => {
          setFormSubmitted(false)
        }, 5000)
      })
      .catch(error => console.log("Request failed", error))
  }

  return formSubmitted ? (
    <h1>Thank you for signing up!</h1>
  ) : (
    <>
      <h1 className="font-sofia-pro">
        Want to ship more high-quality features faster?
      </h1>
      <p>
        Sign up for my free five week course to get your team shipping changes
        daily!
      </p>
      <form
        className="bg-gold flex items-center flex-col"
        onSubmit={e => handleSubmit(e)}
      >
        <input type="hidden" name="u" value="3" />
        <input type="hidden" name="f" value="3" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input
          type="hidden"
          name="or"
          value="b37539ce92982cb5dd3e61c4973e8250"
        />
        <div className="p-4 bg-gold font-sofia-pro font-black text-base w-full">
          <div className="mb-2">
            <label className="mb-2">First Name</label>
            <div>
              <input
                className="w-full border-navy border-2"
                type="text"
                name="fullname"
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-2">
            <label>Email *</label>
            <div>
              <input
                className="w-full border-navy border-2"
                type="text"
                name="email"
                placeholder=""
                required
              />
            </div>
          </div>
          <div>
            <button
              className="text-4xl w-full transition ease-in-out delay-400 text-white bg-red border-white hover:bg-navy border-4 p-6 pt-5"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
