import React from "react";
import "./footer.scss";

const links = [
  {
    name: "mail",
    url: "mailto: jose.leon.avila@gmail.com",
    icon: "far fa-paper-plane",
  },
  {
    name: "cv",
    url:
      "https://drive.google.com/file/d/1eLsCJK-jBx5VjiRZN28gw1FyKJBkhU33/view?usp=sharing",
    icon: "far fa-file-pdf",
  },
  {
    name: "github",
    url: "http://github.com/j-avila",
    icon: "fab fa-github",
  },
  {
    name: "dribbble",
    url: "http://dribbble.com/josefosaurus",
    icon: "fab fa-dribbble",
  },
  {
    name: "linkedin",
    url: "http://linkedin.com/in/avilajose",
    icon: "fab fa-linkedin",
  },
  {
    name: "twitter",
    url: "http://twitter.com/josefosaurus",
    icon: "fab fa-twitter",
  },
];

export const Footer = (props) => {
  return (
    <footer>
      <div className="content">
        <p>
          <i className="fab fa-creative-commons"></i> jose avila unlimited.
        </p>
        <ul>
          {links &&
            links.length > 0 &&
            links.map((link) => (
              <li key={link.name}>
                <a href={link.url} target="BLANK">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
};
