import React from "react";
import Link from "gatsby-link";
import FancyButton from "../FancyButton/FancyButton";
import LandingButton from "../../components/LandingButton/LandingButton.jsx"
import "./Landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
  	const { text } = this.props;

    return(
      <div className="landing">
        <h1 className="title">Do you want to validate your ideas early and quickly?</h1>
        <h4 className="conversation">Test-drive your product and campaign ideas with input from a community of Product, Technology and Marketing Analysts, Developers and Executives.</h4>
        <LandingButton></LandingButton>
        <Link to="/landing/">Show me a demo</Link>
        <br />
        <br />
      </div>
    )
  }
}

export default Landing;
