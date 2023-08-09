import "./portfolio.css";
import IMG1 from "../../assets/materiel.png";
import IMG2 from "../../assets/materiel2.webp";
import IMG3 from "../../assets/materiel3.png";
import IMG4 from "../../assets/material4.jpg";
import IMG5 from "../../assets/material5.jpg";
import IMG6 from "../../assets/material6.jpg";

function portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Materiel1",
      href1: "FirstContact",
      href2: "SecondContact"
    },
    {
      id: 2,
      image: IMG2,
      title: "Materiel2",
      href1: "FirstContact",
      href2: "SecondContact"
    },
    {
      id: 3,
      image: IMG3,
      title: "Materiel3",
      href1: "FirstContact",
      href2: "SecondContact"
    },
    {
      id: 4,
      image: IMG4,
      title: "Materiel4",
      href1: "FirstContact",
      href2: "SecondContact"
    },
    {
      id: 5,
      image: IMG5,
      title: "Materiel5",
      href1: "FirstContact",
      href2: "SecondContact"
    },
    {
      id: 6,
      image: IMG6,
      title: "Materiel6",
      href1: "FirstContact",
      href2: "SecondContact"
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, href1, href2 }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="pic" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-cta">
                <a href="#1" className="btn">
                  {href1}
                </a>
                <a href="#2" className="btn btn-primary" target="_blank">
                  {href2}
                </a>
              </div>
            </article>
          );
        })}
      </div>
      {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="pic" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio-cta">
            <a href="#1" className='btn'>FirstContact</a>
            <a href="#2" className='btn btn-primary' target='_blank'>SecondContact</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="pic" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio-cta">
            <a href="#1" className='btn'>FirstContact</a>
            <a href="#2" className='btn btn-primary' target='_blank'>SecondContact</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="pic" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio-cta">
            <a href="#1" className='btn'>FirstContact</a>
            <a href="#2" className='btn btn-primary' target='_blank'>SecondContact</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="pic" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio-cta">
            <a href="#1" className='btn'>FirstContact</a>
            <a href="#2" className='btn btn-primary' target='_blank'>SecondContact</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="pic" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio-cta">
            <a href="#1" className='btn'>FirstContact</a>
            <a href="#2" className='btn btn-primary' target='_blank'>SecondContact</a>
          </div>
        </article> */}
    </section>
  );
}

export default portfolio;
