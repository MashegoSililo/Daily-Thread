import React from "react";
import {
  sustainability,
  springSummer,
  fashionWeek,
  collaboration,
} from "../content";

export const Sustainability = () => {
  const {
    title,
    subheading,
    hero,
    intro,
    body,
    conclusion,
    gallery,
    quote,
  } = sustainability;
  return (
    <div className="page">
      <article>
        <div className="overlap">
          <img src={hero} alt=""></img>
          <h2 className="article-title">{title}</h2>
        </div>

        <h3>{subheading}</h3>
        <p>{intro}</p>
        <div className="gallery">
          <div>
            <img alt="" src={gallery.img1.image}></img>
            <caption>{gallery.img1.caption}</caption>
          </div>
          <div>
            <img alt="" src={gallery.img2.image}></img>
            <caption>{gallery.img2.caption}</caption>
          </div>
          <i>
            <h3>{quote}</h3>
          </i>
        </div>
        <p>{body}</p>
        <div>
          <img alt="" src={gallery.img3.image}></img>
          <caption>{gallery.img3.caption}</caption>
        </div>
        <p>{conclusion}</p>
      </article>
    </div>
  );
};

export const ThisSeason = () => {
  const {
    title,
    subheading,
    hero,
    intro,
    body,
    conclusion,
    gallery,
    quote,
  } = springSummer;
  return (
    <div className="page">
      <article>
        <div className="overlap">
          <img src={hero} alt=""></img>
          <h2 className="article-title">{title}</h2>
        </div>

        <h3>{subheading}</h3>
        <p>{intro}</p>
        <div className="gallery">
          <div>
            <img alt="" src={gallery.img1.image}></img>
            <caption>{gallery.img1.caption}</caption>
          </div>
          <div>
            <img alt="" src={gallery.img2.image}></img>
            <caption>{gallery.img2.caption}</caption>
          </div>
          <i>
            <h3>{quote}</h3>
          </i>
        </div>
        <p>{body}</p>
        <div>
          <img alt="" src={gallery.img3.image}></img>
          <caption>{gallery.img3.caption}</caption>
        </div>
        <p>{conclusion}</p>
      </article>
    </div>
  );
};

export const FashionWeek = () => {
  const {
    title,
    subheading,
    hero,
    intro,
    body,
    conclusion,
    gallery,
    quote,
  } = fashionWeek;
  return (
    <div className="page">
      <article>
        <div className="overlap">
          <img src={hero} alt=""></img>
          <h2 className="article-title">{title}</h2>
        </div>

        <h3>{subheading}</h3>
        <p>{intro}</p>
        <div className="gallery">
          <div>
            <img alt="" src={gallery.img1.image}></img>
            <caption>{gallery.img1.caption}</caption>
          </div>
          <div>
            <img alt="" src={gallery.img2.image}></img>
            <caption>{gallery.img2.caption}</caption>
          </div>
          <i>
            <h3>{quote}</h3>
          </i>
        </div>
        <p>{body}</p>
        <div>
          <img alt="" src={gallery.img3.image}></img>
          <caption>{gallery.img3.caption}</caption>
        </div>
        <p>{conclusion}</p>
      </article>
    </div>
  );
};

export const Collaboration = () => {
  const {
    title,
    subheading,
    hero,
    intro,
    body,
    conclusion,
    gallery,
    quote,
  } = collaboration;
  return (
    <div className="page">
      <article>
        <div className="overlap">
          <img src={hero} alt=""></img>
          <h2 className="article-title">{title}</h2>
        </div>

        <h3>{subheading}</h3>
        <p>{intro}</p>
        <div className="gallery">
          <div>
            <img alt="" src={gallery.img1.image}></img>
            <caption>{gallery.img1.caption}</caption>
          </div>
          <div>
            <img alt="" src={gallery.img2.image}></img>
            <caption>{gallery.img2.caption}</caption>
          </div>
          <i>
            <h3>{quote}</h3>
          </i>
        </div>
        <p>{body}</p>
        <div>
          <img alt="" src={gallery.img3.image}></img>
          <caption>{gallery.img3.caption}</caption>
        </div>
        <p>{conclusion}</p>
      </article>
    </div>
  );
};
