import React, { useState, useEffect } from "react";
import "./about.scss";
import Loader from "../shared/Loader";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../../store/actions";

const ExpItem = ({ data }) => {
  const { title, content } = data;
  return (
    <article>
      <h2>{title.rendered}</h2>
      {parse(content.rendered)}
    </article>
  );
};

const genData = (arr) => ({
  exp: arr.filter((item) => item.categories[0] === 92),
  school: arr.filter((item) => item.categories[0] === 93).reverse(),
  skills: arr.filter((item) => item.categories[0] === 94),
});

export const About = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const aboutData = useSelector((state) => state.aboutInfo);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchAbout());
  }, []);

  useEffect(() => {
    aboutData.info && setData(genData(aboutData.info));
  }, [aboutData]);

  return (
    <div className="about">
      <div className="head">
        <h1>about</h1>
        <p>education, skills, life...</p>
      </div>
      <section className="cv">
        <div className="block experience">
          <h4>Experiencia</h4>
          {data.exp && data.exp.length >= 1 && !loading ? (
            data.exp.map((item, index) => <ExpItem key={index} data={item} />)
          ) : (
            <Loader />
          )}
        </div>
        <div className="block formation">
          <h4>Educación</h4>
          <div className="education">
            {data.school && data.school.length >= 1 && !loading ? (
              data.school.map((item, index) => (
                <ExpItem key={index} data={item} />
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div className="skills">
            <h4>Habilidades</h4>
            {data.skills && data.skills.length >= 1 && !loading ? (
              data.skills.map((skill, index) => (
                <ExpItem key={index} data={skill} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
