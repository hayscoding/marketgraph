import React from "react";
import "./HeroCallout.css";

class HeroCallout extends React.Component {
  render() {
    const lede = "Do you wonder if people want your product or service idea?"
    if (lede) {
      return <h2 className="hero-callout">{lede}</h2>;
    }
    return null;
  }
}

export default HeroCallout;
