import React from "react";
import "./Article.css";

const article = ({ article }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p className="author"><span className="author-pref">by </span>{article.author}</p>
    <p>{article.body}</p>
  </div>
);

export default article;
