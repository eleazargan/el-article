import React, { useState, useContext } from "react";
import "./AddArticle.css";
import { ArticleContext } from "../../context/articleContext";

const AddArticle = () => {
  const { dispatch } = useContext(ArticleContext);
  const [article, setArticle] = useState();

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };

  const addNewArticle = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ARTICLE", article });
  };

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="author"
        placeholder="Author"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body Snippet"
        onChange={handleArticleData}
      />
      <button>Add Short Article</button>
    </form>
  );
};
export default AddArticle;
