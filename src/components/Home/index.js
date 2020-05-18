import React from "react";
import Portfolio from "../shared/portfolio";
import { dummyWorks } from "../../assets/dummy";
import "./home.scss";

const desc =
  "Soy un desarrollador web con una pasión por aprender constantemente, la tecnología y por el café. Actualmente me encuentro";

export const Home = (props) => {
  const {
    name = "jose avila",
    description = desc,
    status = "trabajando de manera independiente",
  } = props;
  return (
    <div id="home">
      <div className="aboutme">
        <h1>
          {`Hola! Soy `}
          <span>{name}</span>.
        </h1>
        <p>
          {description} <span>{status}</span>
        </p>
      </div>
      <section>
        <Portfolio items={dummyWorks} />
      </section>
    </div>
  );
};

/* cost worksUrl = 'http://joseavila.co.ve/wp-portfolio/wp-json/wp/v2/trabajos?_embed';
cost workUrl = 'http://joseavila.co.ve/wp-portfolio/wp-json/wp/v2/trabajos&per_page=10';
cost siteInfo = 'http://joseavila.co.ve/wp-portfolio/wp-json/'; */
