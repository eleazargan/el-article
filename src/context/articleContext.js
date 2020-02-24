import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { 
      id: 1, 
      title: "Rethinking Asia ", 
      author: "Eleazar Hello",
      body: "What is it like to be taken over by a Chinese firm? Executives, speaking to The Economist tell of hungry decisiveness, followed by strange opacity: who is in charge, what really do they want? When Aung San Suu Kyi, Burma’s dignified opposition leader, was released from house arrest after 15 odd years, on and off, she spoke of using a mobile phone for the very first time (‘It felt very inadequate to me;, she said: ‘It was so small’). Her ignorance of one of the basic tools of modern life gave a small insight into her long and unjust imprisonment." }
  ]);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
