import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="skills__details">
              <BsFillCheckCircleFill/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article> */}
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Springboot</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
