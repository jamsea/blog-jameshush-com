import React, { useState } from "react"

const ActiveCampaignForm = () => {
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
        console.log(res)
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
    <form onSubmit={e => handleSubmit(e)}>
      <input type="hidden" name="u" value="3" />
      <input type="hidden" name="f" value="3" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="b37539ce92982cb5dd3e61c4973e8250" />
      <div>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" name="fullname" placeholder="" />
          </div>
        </div>
        <div>
          <label>Email*</label>
          <div>
            <input type="text" name="email" placeholder="" required />
          </div>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  )
}

export default function Component() {
  return (
    <div>
      <ActiveCampaignForm />
    </div>
  )
}
