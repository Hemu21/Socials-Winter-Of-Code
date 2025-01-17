import { React, Component } from "react";
import "../components/css/team2023.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

import dummyImage from "../components/img/dummy-image.webp";
import bgImage from "../components/img/bg-team.svg";
import abhishekAnand from "../components/img/Team2023/Abhishek_Anand.jpg";
import abhishekMankuskar from "../components/img/Team2023/Abhishek_Mankuskar.jpg";
import jaySaadana from "../components/img/Team2023/Jay_Saadana.jpg";
import abhishekSharma from "../components/img/Team2023/Abhishek_Sharma.jpg";
import hariprasadSakhare from "../components/img/Team2023/Hariprasad_Sakhare.jpg";
import nitishSheoran from "../components/img/Team2023/Nitish_Sheoran .jpg";
import pritamNandi from "../components/img/Team2023/Pritam_Nandi.jpg";
import vikasKumarYadav from "../components/img/Team2023/Vikas_Kumar_Yadav.jpg";
import mohitSingh from "../components/img/Team2023/Mohit_Singh.jpg";
import anuraghWagh from "../components/img/Team2023/Anurag_Wagh.png";
import sovan from "../components/img/Team2023/sovan.jpg";
class Team2023 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      randomColor: ["#fff"],
      activeStack: "",
      scrollStamp: 0,
      modalDisplay: "none",
      bodyOverflow: "initial",
    };
  }

  handleResize = (e) => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleScroll = (e) => {
    this.setState({ scrollStamp: document.documentElement.scrollTop });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Aos.init({
      duration: 500,
    });

    document.querySelector(".main-nav").classList.add("nav-scrolled");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const teamMembers = [
      {
        name: "Abhishek Mankuskar",
        role: "Creator & Founding Organizer SWOC",
        linkedin: "https://www.linkedin.com/in/abhishek-mankuskar-03790018b/",
        github: "https://github.com/abhishekmankuskar",
        image: abhishekMankuskar,
      },
      {
        name: "Jay Saadana",
        role: "Creator Social & Devrel Lead India @ Quira",
        linkedin: "https://www.linkedin.com/in/jaysaadana",
        github: "https://github.com/jaysaadana",
        image: jaySaadana,
      },
      {
        name: "Vikash Kumar Yadav",
        role: "PR Team",
        linkedin: "https://www.linkedin.com/in/vikashkumar-yadav/",
        github: "https://www.linkedin.com/in/vikashkumar-yadav/",
        image: vikasKumarYadav,
      },
     
    ];

    return (
      <>
        <span hidden="true" id="page-name">
          Team
        </span>
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-text">
              <h1 className="header-title">Meet Our Team</h1>
              <p className="header-description">
                We're a passionate team dedicated to innovation and
                collaboration.
              </p>
              {/* <button className="header-btn">Join Us</button> */}
            </div>
            <div className="header-image">
              <img src={bgImage} alt="Team" />
            </div>
          </div>
        </header>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="member-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                  onError={(e) => {
                    e.target.src = dummyImage;
                  }}
                />
              </div>
              <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="social-links">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Team2023;
