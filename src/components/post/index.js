import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";
import "./post.scss";

export const Post = (props) => {
  const location = useLocation();
  const { title, excerpt, content, link } = location.postData;

  return (
    <article>
      {props && content ? (
        <>
          <div className="postHead">
            <h1>{title.rendered}</h1>
            {parse(excerpt.rendered)}
          </div>
          <div className="content">{parse(content.rendered)}</div>
          <a className="linkBut" href={link}>
            ver proyecto
          </a>
        </>
      ) : (
        "loading..."
      )}
    </article>
  );
};
