import React, { useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./portfolio.scss";

const PortItem = (props) => {
  const { data } = props;
  const { title, excerpt, slug, _embedded } = data;
  const [bgOn, setbgOn] = useState(false);
  const thumb =
    _embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

  return (
    <article className="work">
      <div
        onMouseEnter={() => setbgOn(true)}
        onMouseLeave={() => setbgOn(false)}
      >
        <Link
          to={{
            pathname: `/work/${slug}`,
            postData: data,
          }}
        >
          <h1>{title.rendered}</h1>
          {parse(excerpt.rendered)}
        </Link>
        {bgOn && <span style={{ background: ` url(${thumb})` }}></span>}
      </div>
    </article>
  );
};

const Portfolio = (props) => {
  const { items } = props;
  return (
    <>
      {items.length >= 1
        ? items.map((post) => <PortItem key={post.id} data={post} />)
        : "loading"}
    </>
  );
};

export default Portfolio;
