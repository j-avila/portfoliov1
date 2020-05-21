import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import "./post.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../store/actions";
import Loader from "../shared/Loader";

export const Post = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const work = useSelector((state) => state.currentProject);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getProject(location.urlPath));
  }, []);

  return (
    <article>
      {work && work.project && !loading ? (
        <>
          <div className="postHead">
            <h1>{work.project.title.rendered}</h1>
            {parse(work.project.excerpt.rendered)}
          </div>
          <div className="content">{parse(work.project.content.rendered)}</div>
          <a className="linkBut" href={work.project.link}>
            ver proyecto
          </a>
        </>
      ) : (
        <Loader type="post" />
      )}
    </article>
  );
};
