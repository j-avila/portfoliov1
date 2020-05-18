import React from "react";
import "./about.scss";

const ExpItem = (props) => {
  const { content } = props;
  return (
    <article>
      <h2>title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat
        perspiciatis hic eius porro numquam nulla eveniet consectetur vel, vero
        amet atque quis voluptates earum iure minus, libero perferendis
        recusandae?
      </p>
    </article>
  );
};
const arr = {
  exp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  school: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  skills: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export const About = (props) => {
  // const { data } = props;
  const data = arr;
  return (
    <div className="about">
      <div className="head">
        <h1>about</h1>
        <p>education, skills, life...</p>
      </div>
      <section className="cv">
        <div className="experience">
          <h4>Experiencia</h4>
          {data.exp && data.exp.length >= 1
            ? data.exp.map((item, index) => (
                <ExpItem key={index} content={item} />
              ))
            : "loading..."}
        </div>
        <div className="formation">
          <h4>Educación</h4>
          <div className="education">
            {data.school && data.school.length >= 1
              ? data.school.map((item, index) => (
                  <ExpItem key={index} content={item} />
                ))
              : "loading..."}
          </div>
          <div className="skills">
            <h4>Habilidades</h4>
            {data.skills && data.skills.length >= 1
              ? data.skills.map((skill, index) => (
                  <ExpItem key={index} content={skill} />
                ))
              : "loading..."}
          </div>
        </div>
      </section>
    </div>
  );
};
