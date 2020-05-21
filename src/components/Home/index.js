import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Portfolio from "../shared/portfolio";
import { dummyWorks } from "../../assets/dummy";
import "./home.scss";
import { fetchWorks } from "../../store/actions";

const desc =
  "Soy un desarrollador web con una pasión por aprender constantemente, la tecnología y por el café. Actualmente me encuentro";

export const Home = (props) => {
  const worksData = useSelector((state) => state.works);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const {
    name = "jose avila",
    description = desc,
    status = "trabajando de manera independiente",
  } = props;

  useEffect(() => {
    dispatch(fetchWorks());
  }, []);

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
        <Portfolio items={worksData} />
      </section>
    </div>
  );
};
