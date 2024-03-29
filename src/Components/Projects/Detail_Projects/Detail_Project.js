import React from "react";
import "./Detail_Project.css";
import { Link } from "react-router-dom";

const DetailProject = (props) => {
  window.scrollTo(0, 0);
  console.log(props.github);

  let front;
  let back;
  let Back_article;

  if (props.frontDepends) {
    front = props.frontDepends.map((note) => <li>{note}</li>);
  }

  if (props.backDepends) {
    back = props.backDepends.map((note) => <li>{note}</li>);
    Back_article = (
      <article id="back">
        <article className="flex-title">
          <h2>Back-side</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />{" "}
          </svg>
        </article>
        <p>{props.back}</p>
        <article className="dependecies">
          <h3>Dependencies</h3>
          <ul>{back}</ul>
        </article>
      </article>
    );
  }

  return (
    <section id="Section">
      <article
        id="Container"
        className={`${props.color === "grey" ? "grey" : "green"}`}
      >
        <div id="a-back">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
            </svg>
          </Link>
        </div>
        <article className="flex-article">
          <article id="left-side-article">
            <figure>
              <img src={`/imgs/${props.img}`} />
            </figure>
          </article>
          <article id="rigth-side-article">
            <p>{props.info}</p>
            <article className="flex-buttons" id="buttons">
              <a href={props.github}>
                <button>Code</button>
              </a>
              <a href={props.demo}>
                <button>Demo</button>
              </a>
            </article>
          </article>
        </article>
        <article className="flex-sides" id="top">
          <article id="front">
            <article className="flex-title">
              <h2>Front-side</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
              </svg>
            </article>
            <p>{props.front}</p>
            <article className="dependecies">
              <h3>Dependencies</h3>
              <ul>{front}</ul>
            </article>
          </article>
          {Back_article}
        </article>
      </article>
    </section>
  );
};

export default DetailProject;
