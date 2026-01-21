import React from "react";
import "./PreSchool.css";
import preschoolImage1 from "../assets/preschool_image1.png";
import preschoolImage2 from "../assets/preschool_image2.png";
import preschoolImage3 from "../assets/preschool_image3.png";
import preschoolImage4 from "../assets/preschool_image4.png";
import preschoolImage5 from "../assets/preschool_image5.png";
import preschoolImage6 from "../assets/preschool_image6.png";
import preschoolImage7 from "../assets/preschool_image7.png";
import preschoolImage9 from "../assets/preschool_image9.jpg";
import preschoolImage10 from "../assets/preschool_image10.jpeg";
import preschool_svg1 from "../assets/preschool_svg1.svg";
import preschool_svg2 from "../assets/preschool_svg2.svg";
import preschool_svg3 from "../assets/preschool_svg3.svg";
import preschool_svg4 from "../assets/preschool_svg4.svg";
import preschool_svg5 from "../assets/preschool_svg5.svg";
import preschool_svg6 from "../assets/preschool_svg6.svg";
import preschoolAdmissionBg from "../assets/preschool_admissionbg.png";
import ClassroomIcon from "../assets/preschool_facility1.svg";
import PlayAreaIcon from "../assets/preschool_facility2.svg";
import ArtMusicIcon from "../assets/preschool_facility3.svg";
import ReadingIcon from "../assets/preschool_facility4.svg";
import ToiletIcon from "../assets/preschool_facility5.svg";
import MedicalIcon from "../assets/preschool_facility6.svg";
import CounsellorIcon from "../assets/preschool_facility7.svg";
import TransportIcon from "../assets/preschool_facility8.svg";
import SecurityIcon from "../assets/preschool_facility9.svg";

import preschoolFacilityBg from "../assets/preschool_facilitybg.png";

const PreSchool = () => {
  return (
    <div className="preschool-wrapper">
      <section className="preschool-hero">
        <div className="preschool-container">
          {/* Left Side - Logo and Text Content */}
          <div className="preschool-content">
            {/* Sherwood Logo */}
            <div className="sherwood-logo">
              <img
                src={preschoolImage1}
                alt="Sherwood Preschool Logo"
                className="logo-image"
              />
            </div>

            {/* Main Heading */}
            <h1 className="preschool-heading">Play. Learn. Grow.</h1>

            {/* Description */}
            <p className="preschool-description">
              A joyful, child-centred learning for ages 2.5 to 5.5 years, where
              childhood is protected and learning grows naturally - guided by
              Sherwood's trusted legacy since 1984.
            </p>
          </div>

          {/* Right Side - Squirrel Character and Classroom Image */}
          <div className="preschool-visual">
            {/* Classroom Image */}
            <div className="classroom-image">
              <img
                src={preschoolImage2}
                alt="Happy children in preschool classroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Early Years Section */}
      <section className="early-years-section">
        <div className="early-years-container">
          {/* Left Side - Image */}
          <div className="early-years-image-wrapper">
            <div className="early-years-img-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="69"
                viewBox="0 0 113 69"
                fill="none"
                className="early-years-decoration-svg"
              >
                <path
                  d="M11.0474 60.7744C13.4394 59.0007 15.5109 57.4633 17.5858 55.9189C17.822 56.1338 18.0477 56.3522 18.2839 56.567C17.9917 57.2755 17.837 58.0966 17.3862 58.6642C15.1039 61.5056 12.7581 64.2976 10.3983 67.065C8.95422 68.7572 7.71721 68.5886 6.57462 66.7495C4.48339 63.3709 2.30056 60.0523 0.237509 56.6526C-0.0798853 56.1241 0.067756 55.2994 0.000486101 54.6052C0.659554 54.7847 1.51588 54.7631 1.94599 55.1894C3.72641 56.9682 5.38354 58.888 7.34737 61.0579C7.83264 58.7107 8.2581 56.5891 8.71528 54.4745C11.6622 40.6556 16.7734 27.8647 26.4667 17.2567C31.257 12.0214 36.6255 7.35679 43.0133 4.53123C53.3648 -0.0581018 64.0098 -2.14904 74.637 3.04413C78.6799 5.0193 81.8352 8.01329 83.8492 12.1108C84.5688 13.58 85.2879 14.1153 86.9546 13.6706C94.4246 11.6938 101.99 10.8306 109.634 11.4862C110.536 11.5668 111.41 11.8624 112.305 12.0629C112.288 12.4329 112.271 12.803 112.26 13.1765C111.224 13.2933 110.171 13.6038 109.163 13.5056C101.396 12.7972 93.8337 14.1996 86.0007 16.1977C87.3103 21.2118 87.1328 26.1349 85.817 31.062C84.16 37.272 81.1035 42.651 76.4186 47.0405C72.5085 50.7072 67.8929 52.4183 62.6455 52.2022C55.7948 51.9163 51.5912 45.1662 53.8433 38.0114C55.4938 32.767 58.8151 28.6918 62.8696 25.1766C68.3086 20.459 74.6081 17.3692 81.4717 14.7901C79.9761 11.4183 77.8464 8.82206 74.8678 6.97328C68.0576 2.74399 60.6571 2.65918 53.0673 4.57609C38.402 8.27929 28.1832 17.929 20.7287 30.95C15.475 40.1288 12.6884 50.1523 11.051 60.7497L11.0474 60.7744ZM82.4207 17.0345C74.9933 19.8429 68.3487 23.3769 62.8078 28.8274C59.6059 31.9758 57.0491 35.6137 56.2054 40.1424C55.2772 45.1222 58.3133 49.3074 62.9261 49.2419C66.6721 49.1839 70.3544 48.4422 73.3556 45.7133C80.9291 38.8205 84.4141 30.3085 83.4511 20.121C83.3555 19.0956 82.7982 18.1303 82.4207 17.0345Z"
                  fill="#BB1D1C"
                />
              </svg>
              <img
                src={
                  preschoolImage3
                } /* Reusing existing image as placeholder/actual - verify requirement */
                alt="Children learning"
                className="early-years-img"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="early-years-content-wrapper">
            <h2 className="early-years-heading">
              The early years shape everything that follows.
            </h2>
            <p className="early-years-text">
              At Sherwood Pre-School, children begin their learning journey in a
              space that feels safe, warm, and deeply caring. We focus on
              emotional security, language, independence, and curiosity —
              allowing every child to grow at their own pace, without pressure
              or comparison.
            </p>
            <div className="early-years-squirrel">
              <img
                src={preschoolImage4}
                alt="Squirrel Mascot"
                className="mascot-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="framework-section">
        <div className="framework-container">
          <div className="framework-header">
            <h2 className="framework-title">The Play-Learn-Grow Framework</h2>
            <p className="framework-subtitle">
              Our proprietary six-domain approach to early childhood excellence:
            </p>
          </div>

          <div className="framework-grid">
            {[
              {
                title: "Language & Communication",
                component: (
                  <img src={preschool_svg1} alt="Language & Communication" />
                ),
                color: "#FADADD",
                shadowColor: "#FADADD",
              },
              {
                title: "Thinking & Problem-Solving",
                component: (
                  <img src={preschool_svg2} alt="Thinking & Problem-Solving" />
                ),
                color: "#D0F0C0",
                shadowColor: "#D0F0C0",
              },
              {
                title: "Motor Skills & Movement",
                component: (
                  <img src={preschool_svg3} alt="Motor Skills & Movement" />
                ),
                color: "#E6E6FA",
                shadowColor: "#E6E6FA",
              },
              {
                title: "Creativity & Expression",
                component: (
                  <img src={preschool_svg4} alt="Creativity & Expression" />
                ),
                color: "#E0FFFF",
                shadowColor: "#E0FFFF",
              },
              {
                title: "Social Awareness",
                component: <img src={preschool_svg5} alt="Social Awareness" />,
                color: "#FFFACD",
                shadowColor: "#FFFACD",
              },
              {
                title: "Emotional Growth",
                component: <img src={preschool_svg6} alt="Emotional Growth" />,
                color: "#FFDAB9",
                shadowColor: "#FFDAB9",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="framework-card"
                style={{ boxShadow: `8px 8px 0px 0px ${item.shadowColor}` }}
              >
                <div className="card-icon">{item.component}</div>
                <h3 className="card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Offered Section */}
      <section className="programmes-section">
        <div className="programmes-container">
          <div className="programmes-header">
            <h2 className="programmes-title">Programmes Offered</h2>
            <p className="programmes-description">
              Three carefully designed programmes for children aged 2.5 to 5.5
              years, each building the foundations for lifelong learning.
            </p>
          </div>

          <div className="programmes-grid">
            {[
              {
                title: "Play School",
                age: "2.5 - 3.5 years",
                description:
                  "A gentle introduction to school with sensory play, early communication, stories, creative activities and social interaction.",
                color: "#F6D97D", // Yellow
                shade1Color: "#FAE7A3",
                shade2Color: "#F2D166",
                image: preschoolImage5,
              },
              {
                title: "Pre-Primary 1",
                age: "3.5 - 4.5 years",
                description:
                  "Emerging skills in early literacy, numeracy, motor development, social confidence and thinking - all through guided play.",
                color: "#B4D688", // Green
                shade1Color: "#D5EAB1",
                shade2Color: "#B3D485",
                image: preschoolImage6,
              },
              {
                title: "Pre-Primary 2",
                age: "4.5 - 5.5 years",
                description:
                  "Pre-reading, pre-writing, early maths, communication, independence and emotional readiness for Class 1.",
                color: "#F6B69C", // Orange/Peach
                shade1Color: "#FBC7B1",
                shade2Color: "#F5A486",
                image: preschoolImage7,
              },
            ].map((program, index) => (
              <div key={index} className="programme-card-wrapper">
                <div className="programme-card">
                  <div className="programme-content">
                    <h3 className="programme-title">{program.title}</h3>
                    <p className="programme-age">{program.age}</p>
                    <p className="programme-desc">{program.description}</p>
                  </div>
                  <div className="programme-image-container">
                    <img
                      src={program.image}
                      alt="Squirrel Mascot"
                      className="programme-mascot"
                    />
                  </div>
                </div>
                {/* Two separate shades with equal height */}
                <div
                  className="programme-shade1"
                  style={{ backgroundColor: program.shade1Color }}
                ></div>
                <div
                  className="programme-shade2"
                  style={{ backgroundColor: program.shade2Color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <div className="approach-container">
          {/* Left Side: Content */}
          <div className="approach-content">
            <h2 className="approach-heading">Our Approach to Early Learning</h2>
            <h3 className="approach-subheading">
              A Thoughtful Beginning That Feels Right
            </h3>
            <p className="approach-text">
              The earliest years are not about rushing into academics — they are
              about building emotional security, language, independence, and joy
              in learning.
            </p>
            <p className="approach-text">
              At Sherwood Pre-School, children are welcomed into a calm, caring
              space where they feel safe to explore, express, and grow at their
              own pace. Learning unfolds naturally through meaningful
              experiences, guided play, and gentle routines that respect each
              child's individuality.
            </p>
            <div className="approach-keywords">
              <span className="keyword">Safe Environment</span>
              <span className="separator">|</span>
              <span className="keyword">Guided Play</span>
              <span className="separator">|</span>
              <span className="keyword">Individual Pace</span>
            </div>
          </div>

          {/* Right Side: Visual 2x2 Grid */}
          <div className="approach-visual">
            <div className="visual-grid">
              <img
                src={preschoolImage9}
                alt="Our Approach"
                className="grid-img"
              />
            </div>
          </div>
        </div>
        <hr className="approach-divider" />
      </section>

      {/* Why Choose Sherwood Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-title">Why Parents Choose Sherwood</h2>
            <p className="why-choose-subtitle">
              A beautiful beginning that grows into a lifelong journey.
            </p>
          </div>

          <div className="why-choose-content">
            {/* Left Column */}
            <div className="why-column left-column">
              {[
                "A learning environment that protects the joy of childhood",
                "Low student-teacher ratio with classroom helpers",
                "Purposeful play that builds real academic and life skills",
                "A trusted educational legacy spanning four decades",
              ].map((text, index) => (
                <div key={index} className="why-card">
                  <p className="why-card-text">{text}</p>
                </div>
              ))}
            </div>

            {/* Center Column - Arched Image */}
            <div className="why-column center-column">
              <div className="arch-image-container">
                {/* Using preschoolImage1 (squirrel) is wrong. Using preschoolImage2 (class) is okay. 
                     Ideally we need a portrait of a kid. I'll use preschoolImage2 but styled to cover.
                 */}
                <img
                  src={preschoolImage10}
                  alt="Happy child at Sherwood"
                  className="arch-img"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="why-column right-column">
              {[
                "Teachers who observe, understand, and respond to each child",
                "Early support through in-house counselling when needed",
                "Clean, safe, thoughtfully designed campus spaces",
              ].map((text, index) => (
                <div key={index} className="why-card">
                  <p className="why-card-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Safety Section */}
      <section
        className="facilities-section"
        style={{
          backgroundColor: "#F9F9F1",
          backgroundImage: `url(${preschoolFacilityBg})`,
          backgroundBlendMode: "soft-light",
          boxShadow: `0 0 110px 0 rgba(189, 150, 49, 0.20) inset`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="facilities-container">
          <div className="facilities-header">
            <h2 className="facilities-title">Facilities & Safety</h2>
            <p className="facilities-subtitle">
              A beautiful beginning that grows into a lifelong journey.
            </p>
          </div>

          <div className="facilities-grid">
            {[
              {
                title: "Child-Friendly Classrooms",
                icon: ClassroomIcon,
                shadowColor: "#FCE5ED",
              },
              {
                title: "Outdoor Play Areas",
                icon: PlayAreaIcon,
                shadowColor: "#C7E7FD",
              },
              {
                title: "Art and Music Spaces",
                icon: ArtMusicIcon,
                shadowColor: "#EBDDF6",
              },
              {
                title: "Reading & Story Corners",
                icon: ReadingIcon,
                shadowColor: "#D1FAED",
              },
              {
                title: "Clean, Child-Sized Toilets",
                icon: ToiletIcon,
                shadowColor: "#FDF1B9",
              },
              {
                title: "Medical Room",
                icon: MedicalIcon,
                shadowColor: "#FFDAB9",
              },
              {
                title: "In-House Counsellor Access",
                icon: CounsellorIcon,
                shadowColor: "#EBDDF6",
              },
              {
                title: "Safe Transport Options",
                icon: TransportIcon,
                shadowColor: "#D5EAB1",
              },
              {
                title: "CCTV and Trained Security Staff",
                icon: SecurityIcon,
                shadowColor: "#B1E9FB",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="facility-card"
                style={{ boxShadow: `8px 8px 0px 0px ${facility.shadowColor}` }}
              >
                <div className="facility-icon">
                  <img
                    src={facility.icon}
                    alt={facility.title}
                    className="facility-icon-img"
                  />
                </div>
                <h3 className="facility-title">
                  {facility.title.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 ? " " : ""}
                      {/* Break line for specific long titles if needed, or rely on CSS width */}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="admissions-section">
        <div className="admissions-container">
          {/* Left Side: Info with Background */}
          <div className="admissions-left">
            <div
              className="admissions-content-wrapper"
              style={{
                backgroundColor: "#F9F9F1",
                backgroundImage: `url(${preschoolAdmissionBg})`,

                backgroundSize: "100% 100%", // Fit image exactly into container
                backgroundPosition: "center",
                borderRadius: "40px",
              }}
            >
              {/* Background image removed in favor of CSS background for overlay support */}

              <div className="admissions-overlay-content">
                <h2 className="admissions-title">Admissions</h2>
                <p className="admissions-subtitle">
                  Admission into Play School, PP1, and PP2 is now open.
                </p>

                <div className="admission-info-card">
                  <h3 className="info-card-title">Age Groups</h3>
                  <div className="age-groups-row">
                    <span>Play School: 2.5 - 3.5 yrs</span>
                    <span className="divider">|</span>
                    <span>PP1: 3.5 - 4.5 yrs</span>
                    <span className="divider">|</span>
                    <span>PP2: 4.5 - 5.5 yrs</span>
                  </div>
                </div>

                <div className="admission-info-card">
                  <h3 className="info-card-title">Process</h3>
                  <div className="process-steps">
                    Enquiry → School Visit → Interaction → Documentation →
                    Admission Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="admissions-right">
            <div className="enquiry-form-container">
              <h2 className="enquiry-title">Quick Enquiry</h2>
              <form className="enquiry-form">
                <input
                  type="text"
                  placeholder="Parent's Name"
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Child's Age"
                  className="form-input"
                />
                <textarea
                  placeholder="Message"
                  className="form-textarea"
                ></textarea>
                <button type="button" className="enquire-btn">
                  Enquire Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreSchool;
