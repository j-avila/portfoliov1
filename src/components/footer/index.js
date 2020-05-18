import React from "react";
import "./footer.scss";

const links = [
  {
    name: "cv",
    url: "http://google.drive.com",
    icon: "far fa-file-pdf",
  },
  {
    name: "github",
    url: "http://github.com",
    icon: "fab fa-github",
  },
  {
    name: "dribbble",
    url: "http://dribbble.com",
    icon: "fab fa-dribbble",
  },
  {
    name: "linkedin",
    url: "http://linkedin.com",
    icon: "fab fa-linkedin",
  },
  {
    name: "twitter",
    url: "http://twitter.com",
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
                <a href={link.url}>
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
};
