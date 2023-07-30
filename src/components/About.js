import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "black" : "white",
        paddingBottom: "20px",
        borderRadius: "15px",
      }}
    >
      <h1 className="my-3"> About Me</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Address</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
            >
              <strong>Hi! I am Satyam from Shahjahanpur, Uttar Pradesh.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Accadamic Background</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
            >
              I have done my schooling from Jawahar Navodaya Vidhyalaya,
              Shahjahanpur, my B.Tech from KNIT Sultanpur, and now I have joined
              NIT Warangal as Environmental Engineering Student for M.Tech.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Skills & Tools</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "black" : "white",
              }}
            >
              I am a motivated Web Developer with expertise in the MERN
              (MongoDB, Express.js, React.js, Node.js) stack. I have
              successfully designed and developed numerous responsive and
              interactive web applications, delivering exceptional user
              experiences. Proficient in front-end development using HTML5,
              CSS3, and JavaScript, I possess a deep understanding of React.js
              and its ecosystem, enabling me to build dynamic and scalable user
              interfaces. Additionally, my strong back-end development skills in
              Node.js and Express.js, coupled with my proficiency in MongoDB,
              allow me to create robust server-side applications and effectively
              manage databases. Furthermore, I am well-versed in Git version
              control and possess a solid understanding of Agile development
              methodologies. With my strong problem-solving abilities and
              dedication to clean and efficient code, I am confident in my
              ability to contribute to the success of any development team.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
