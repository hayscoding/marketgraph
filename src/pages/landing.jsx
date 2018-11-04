import React from "react"
import rehypeReact from "rehype-react"
import LandingButton from "../components/LandingButton/LandingButton.jsx"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>A Headline You'll Want to Read</h1>
    <div>
      <blockquote>
        <p>
          <em>
            "Before, I was skeptical. But now, I am sure.""
          </em>
        </p>
      </blockquote>
      <img src="https://source.unsplash.com/random/600x300" alt="" />
      <p>
        There's more to this story, as we'll soon find out.
      </p>
    </div>
    <div>
      <LandingButton></LandingButton>
    </div>
    <p></p>
  </div>
)
