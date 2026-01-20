import React from "react";
import "./PreSchool.css";
import preschoolImage1 from "../assets/preschool_image1.png";
import preschoolImage2 from "../assets/preschool_image2.png";
import logo from "../assets/logo.png";

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
                src={logo}
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
            <img
              src={
                preschoolImage2
              } /* Reusing existing image as placeholder/actual - verify requirement */
              alt="Children learning"
              className="early-years-img"
            />
          </div>

          {/* Right Side - Content */}
          <div className="early-years-content-wrapper">
            <div className="arrow-container">
              <svg
                className="red-arrow-svg"
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 10 C 80 10, 95 25, 80 50 C 70 65, 40 55, 30 65"
                  stroke="#C42126"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M30 65 L 35 55 M30 65 L 42 68"
                  stroke="#C42126"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

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
                src={preschoolImage1}
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
                icon: "💬",
                color: "#FADADD", // Pink
                shadowColor: "#FADADD",
              },
              {
                title: "Thinking & Problem-Solving",
                icon: "🧩",
                color: "#D0F0C0", // Tea Green
                shadowColor: "#D0F0C0",
              },
              {
                title: "Motor Skills & Movement",
                icon: "🧸",
                color: "#E6E6FA", // Lavender
                shadowColor: "#E6E6FA",
              },
              {
                title: "Creativity & Expression",
                icon: "🎨",
                color: "#E0FFFF", // Light Cyan
                shadowColor: "#E0FFFF",
              },
              {
                title: "Social Awareness",
                icon: "🌱",
                color: "#FFFACD", // Lemon Chiffon
                shadowColor: "#FFFACD",
              },
              {
                title: "Emotional Growth",
                icon: "🎈",
                color: "#FFDAB9", // Peach Puff
                shadowColor: "#FFDAB9",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="framework-card"
                style={{ boxShadow: `8px 8px 0px 0px ${item.shadowColor}` }}
              >
                <div className="card-icon">{item.icon}</div>
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
                baseColor: "#F4CE5E",
              },
              {
                title: "Pre-Primary 1",
                age: "3.5 - 4.5 years",
                description:
                  "Emerging skills in early literacy, numeracy, motor development, social confidence and thinking - all through guided play.",
                color: "#B4D688", // Green
                baseColor: "#A3C973",
              },
              {
                title: "Pre-Primary 2",
                age: "4.5 - 5.5 years",
                description:
                  "Pre-reading, pre-writing, early maths, communication, independence and emotional readiness for Class 1.",
                color: "#F6B69C", // Orange/Peach
                baseColor: "#EAA082",
              },
            ].map((program, index) => (
              <div key={index} className="programme-card-wrapper">
                <div
                  className="programme-card"
                  style={{ borderBottom: `14px solid ${program.color}` }}
                >
                  <div className="programme-content">
                    <h3 className="programme-title">{program.title}</h3>
                    <p className="programme-age">{program.age}</p>
                    <p className="programme-desc">{program.description}</p>
                  </div>
                  <div className="programme-image-container">
                    <img
                      src={preschoolImage1}
                      alt="Squirrel Mascot"
                      className="programme-mascot"
                    />
                  </div>
                </div>
                {/* 3D Base Effect - rendered as a separate element or pseudo-element styling */}
                <div
                  className="programme-base"
                  style={{ backgroundColor: program.color }}
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
                src={preschoolImage2}
                alt="Kids playing"
                className="grid-img"
              />
              <img
                src={preschoolImage2}
                alt="Kids learning"
                className="grid-img"
              />
              <img
                src={preschoolImage2}
                alt="Kids swinging"
                className="grid-img"
              />
              <img
                src={preschoolImage2}
                alt="Kids together"
                className="grid-img"
              />
            </div>
          </div>
        </div>
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
                  src={preschoolImage2}
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
      <section className="facilities-section">
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
                icon: "🏫",
                shadowColor: "#FFC0CB", // Pink
              },
              {
                title: "Outdoor Play Areas",
                icon: "🛝",
                shadowColor: "#ADD8E6", // Light Blue
              },
              {
                title: "Art and Music Spaces",
                icon: "🎨",
                shadowColor: "#E6E6FA", // Lavender
              },
              {
                title: "Reading & Story Corners",
                icon: "📖",
                shadowColor: "#98FB98", // Pale Green
              },
              {
                title: "Clean, Child-Sized Toilets",
                icon: "🫧",
                shadowColor: "#FFFACD", // Lemon Chiffon
              },
              {
                title: "Medical Room",
                icon: "🩺",
                shadowColor: "#FFDAB9", // Peach Puff
              },
              {
                title: "In-House Counsellor Access",
                icon: "🤝",
                shadowColor: "#E6E6FA", // Lavender
              },
              {
                title: "Safe Transport Options",
                icon: "🚌",
                shadowColor: "#F0E68C", // Khaki
              },
              {
                title: "CCTV and Trained Security Staff",
                icon: "📹",
                shadowColor: "#ADD8E6", // Light Blue
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="facility-card"
                style={{ boxShadow: `8px 8px 0px 0px ${facility.shadowColor}` }}
              >
                <div className="facility-icon">{facility.icon}</div>
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
            <div className="admissions-content-wrapper">
              {/* Background image will be set via CSS or an img tag positioned absolute. 
                   Using img tag here for easy responsive handling + overlay content.
               */}
              <img
                src={preschoolImage2}
                alt="School Building"
                className="admissions-bg-img"
              />

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
