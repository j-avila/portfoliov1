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
