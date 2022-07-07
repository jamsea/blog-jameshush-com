import React from "react"
import renderer from "react-test-renderer"
import ActiveCampaignForm from "./ActiveCampaignForm"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ActiveCampaignForm
        showCopy={true}
        formId={3}
        or="b37539ce92982cb5dd3e61c4973e8250"
      />
    )
    .toJSON()
  expect(tree).toMatchInlineSnapshot(`
    Array [
      <h1
        className="font-sofia-pro"
      >
        Want to ship more high-quality features faster?
      </h1>,
      <p>
        Sign up for my free five week course to get your team shipping changes daily!
      </p>,
      <form
        className="bg-gold flex items-center flex-col"
        onSubmit={[Function]}
      >
        <input
          name="u"
          type="hidden"
          value={3}
        />
        <input
          name="f"
          type="hidden"
          value={3}
        />
        <input
          name="s"
          type="hidden"
        />
        <input
          name="c"
          type="hidden"
          value="0"
        />
        <input
          name="m"
          type="hidden"
          value="0"
        />
        <input
          name="act"
          type="hidden"
          value="sub"
        />
        <input
          name="v"
          type="hidden"
          value="2"
        />
        <input
          name="or"
          type="hidden"
          value="b37539ce92982cb5dd3e61c4973e8250"
        />
        <div
          className="p-4 bg-gold font-sofia-pro font-black text-base w-full"
        >
          <div
            className="mb-2"
          >
            <label
              className="mb-2"
            >
              First Name
            </label>
            <div>
              <input
                className="w-full border-navy border-2"
                name="fullname"
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <div
            className="mb-2"
          >
            <label>
              Email *
            </label>
            <div>
              <input
                className="w-full border-navy border-2"
                name="email"
                placeholder=""
                required={true}
                type="text"
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
      </form>,
    ]
  `)
})
