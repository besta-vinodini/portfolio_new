import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/z.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tittle">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I’m Besta Vinodini, a passionate full-stack web developer currently pursuing Computer Science at RGUKT Rk Valley. I specialize in building responsive and scalable applications using the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy solving real-world problems through code.
            </p>
            <p>
              I have a strong foundation in Data Structures and Algorithms
              (DSA), DBMS, Operating Systems, and Computer Networking, helping
              me solve complex problems effectively.
            </p>
            <p>
            Beyond coding, I’m deeply interested in artificial intelligence and enjoy working on projects involving deep learning and real-time web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>Java</p> <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>TailWind</p> <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p> <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>ReactJS</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>NodeJS</p> <hr style={{ width: "75%" }} />
        </div>
        <div className="about-skill">
          <p>ExpressJS</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p> <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>SQL</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>Git & GitHub</p> <hr style={{ width: "75%" }} />
        </div>
      </div>

      <h1 className="head">Education :</h1>
        <div className="education">
        <div className="edu">
        <h2>Rajiv Gandhi University of Knowledge Technologies, Kadapa</h2>
        <h3>Bachelor of Technology in Computer Science and Engineering</h3>
        <p>2022 - 2026</p>
      </div>

      <div className="edu">
        <h2>Rajiv Gandhi University of Knowledge Technologies, Kadapa</h2>
        <h3>PUC (Class XII)</h3>
        <p>2020-2022</p>
        <p>CGPA: 9.61</p>
      </div>

      <div className="edu">
        <h2>Sri Venkateswara Vidya Mandir, Kanthinagar, Nandyal</h2>
        <h3>Secondary School Education (Class X)</h3>
        <p>Completed in 2020</p>
        <p>GPA: 10.0</p>
      </div>
    </div>

      <div className="about-achivements">
        <div className="about-achivement">
          <h1>6+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>400+</h1>
          <p>DSA Problems Solved</p>
        </div>
      </div>
    </div>
  );
};

export default About;
