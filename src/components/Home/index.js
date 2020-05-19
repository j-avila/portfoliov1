import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Portfolio from "../shared/portfolio";
import { dummyWorks } from "../../assets/dummy";
import "./home.scss";
import { worksUrl } from "../../store/envConst";
import { fetchWorks } from "../../store/actions";

const desc =
  "Soy un desarrollador web con una pasión por aprender constantemente, la tecnología y por el café. Actualmente me encuentro";

export const Home = (props) => {
  const worksData = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(worksUrl);
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
        <Portfolio items={dummyWorks} />
      </section>
    </div>
  );
};
