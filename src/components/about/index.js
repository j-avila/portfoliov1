import React, { useState, useEffect } from "react";
import "./about.scss";
import Loader from "../shared/Loader";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout, fetchStats } from "../../store/actions";
import StatsCard from "../shared/StatsCards";

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

const statsArr = (code, design) => {
  let workStats = [];
  let arr = [code, design];

  workStats = arr.map((obj, index) => {
    return index === 0
      ? {
          type: "github",
          logo: "github_logo.svg",
          user: obj.data.login,
          avatar: obj.data.avatar_url,
          dataOne: obj.data.public_repos,
          iconOne: "fa-code-branch",
          dataTwo: obj.data.public_gists,
          iconTwo: "fa-code",
          tipOne: "repositories",
          tipTwo: "gists",
          url: obj.data.html_url,
        }
      : {
          type: "dribbble",
          user: "josefosaurus",
          logo: "dribbble_logo.svg",
          avatar:
            "https://cdn.dribbble.com/users/15477/avatars/normal/55fd34772c1d6b4b8bc702d472ea0b20.jpg?1586729656",
          dataOne: 11,
          iconOne: "fa-basketball-ball",
          dataTwo: 7,
          iconTwo: "fa-user-friends",
          tipOne: "shots",
          tipTwo: "followers",
          url: "https://dribbble.com/josefosaurus",
        };
  });

  console.log("github data", workStats);
  return workStats;
};

export const About = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const aboutData = useSelector((state) => state.aboutInfo);
  const { codeStats } = useSelector((state) => state.githubStats);
  const [data, setData] = useState([]);
  const [workStats, setWorStats] = useState([]);

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchAbout());
  }, []);

  useEffect(() => {
    aboutData.info && setData(genData(aboutData.info));
    codeStats && setWorStats(statsArr(codeStats, null));
  }, [aboutData]);

  return (
    <section className="about">
      <div className="head">
        <h1>acerca de mi</h1>
        <p>Educación, Experiencia, Vida...</p>
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
      <section className="stats">
        {workStats &&
          workStats.length >= 1 &&
          workStats.map((item) => <StatsCard key={item.type} data={item} />)}
      </section>
    </section>
  );
};
