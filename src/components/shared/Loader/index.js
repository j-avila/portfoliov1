import React, { useState, useEffect } from "react";
import "./loader.scss";

const getLength = (par) => {
  let arr = [];
  for (let i = 0; i <= par; i++) {
    arr.push(i);
  }

  return arr;
};

const Loader = (props) => {
  const { type, lines = 3 } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getLength(lines));
  }, []);

  return (
    <>
      {type === "post" ? (
        <div className="post-skeleton">
          <div className="loader">
            <div className="title">
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <span className="line skeleton-image"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      ) : (
        <>
          {count &&
            count.map((line, index) => (
              <div className="loader" key={index}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default Loader;
