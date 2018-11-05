import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import YouTube from 'react-youtube';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import MainContent from "../layouts/MainContent/MainContent";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageImage from "../components/PageImage/PageImage";
import PageDescription from "../components/PageDescription/PageDescription";
import PageEmailForm from "../components/PageEmailForm/PageEmailForm";
import HeroCallout from "../components/HeroCallout/HeroCallout";
import Landing from "../components/Landing/Landing";
import ProductVote from "../components/ProductVote/ProductVote";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import LandingButton from "../components/LandingButton/LandingButton.jsx";

const descriptionHeader1 = "MarketGraph helps you quickly obtain user data on project ideas and campaigns."
const descriptionHeader2 = "Get data to measure your product-market fit."
const descriptionHeader3 = "For early stage founders and entrepreneurs."

const image1 = 'https://source.unsplash.com/random/200x125'
const image2 = 'https://source.unsplash.com/random/200x125'

const youtubeEmbed = () => {
    const aspectRatio = 16/9
    const height = 465
    const width = height / aspectRatio

    const opts = {
        height: height,
        width: width,
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return(
        <YouTube
          videoId="xjnxMlR_nFo"
          opts={opts}
          onReady={() => {}}
        />
    )
  }

class IndexTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  showSignup() {
    if(this.state.width < 768)
      return(
        <div id="signup" style={styles.signupSmall}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>Yes, I want to create landing pages!</h2>
          <LandingButton></LandingButton>
        </div>
      )
    else
      return(
        <div id="signup" style={styles.signup}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>Yes, I want to create landing pages!</h2>
          <LandingButton></LandingButton>
        </div>
      )
  }

  render() {
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    return (

      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template" style={{background: 'linear-gradient(to left bottom, #230089, #62ffa1)'}}>
            {/* The big featured header */}
            <MainHeader cover={config.siteCover}>
              {/*
              <MainNav overlay={config.siteCover}>
              </MainNav>
              */}
              <div className="vertical">
                <HeroCallout />
                <div className="main-header-content inner">
                  <div className="row">
                    <div className="col left">
                      <Link
                        to="signup"
                        data-offset="-45"
                        spy
                        smooth
                        duration={500}>
                        <Landing />
                      </Link>
                    </div>

                    <div className="col right">
                      <div className="parent stacked-img">
                        <div className="image1 stacked-img">
                          <img src='https://source.unsplash.com/random/300x200' alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}>
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
            <MainContent>
              <div id="description" style={styles.mainDiv}>
                <br />
                <div  style={styles.mainCol}>
                  <h2 style={{color: "black"}}>{descriptionHeader1}</h2>
                  <h3 style={{color: "blue"}}>{descriptionHeader2}</h3>
                  <h6 style={{color: "grey"}}>{descriptionHeader3}</h6>
                  <hr style={styles.regLine}/>
                  <LandingButton></LandingButton>
                  <div className="row">
                  </div>
                </div>
                <br />
              </div>
            </MainContent>
            <MainContent>
             <div id="content" style={styles.mainDiv}>
                <div style={styles.mainCol}>
                <div className="row">
                    <div className="small-col small-left">
                      <PageImage imageUrl={'https://source.unsplash.com/random/300x300'} widthPx={350} rounded={true}/>
                    </div>
                    <div className="small-col small-right">
                      <h2 style={{color: "black", paddingBottom: '20px'}}>Validate your ideas and marketing strategy fast.</h2>
                      <em>"I had multiple competing ideas that I wasn't sure which was best. MarketGraph helped me get actual results to help decide, quickly." - Margaret, Chief Marketing Strategist</em>

                      <br />
                    </div>
                  </div>

                  <hr style={styles.regLine}/>
                    {this.showSignup()}
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

const styles = {
  mainDiv: {
    textAlign: 'center',
    maxWidth: "100%",
    background: "#262A30",
    margin: "auto"
  },
  mainCol: {
    textAlign: 'center',
    background: "rgba(255, 255, 255, 1)",
    width: "70%",
    margin: "auto",
    padding: "3.5% 6%",
    borderRadius: '20px',
  },
  regLine: {
    height: '3px',
    background: "#dddddd",
    width: "70%",
    margin: "40px auto"
  },
  signup: {
    margin: 'auto',
    maxWidth: '1000px',
    padding: '2.5% 0%',
    background: '#d6d6d6'
  },
  signupSmall: {
    margin: 'auto',
    maxWidth: '100%',
    padding: '2.5% 0%',
    background: '#fff'
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
