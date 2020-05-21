import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./portfolio.scss";
import Loader from "../Loader";
import { useSelector } from "react-redux";

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
            urlPath: slug,
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
  const [works, setWorks] = useState([]);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    setWorks(items);
  }, [items]);

  return (
    <>
      {works.data && works.data.length >= 1 && !loading ? (
        works.data.map((post) => <PortItem key={post.id} data={post} />)
      ) : (
        <Loader lines={4} />
      )}
    </>
  );
};

export default Portfolio;
