import React, { useState, createContext } from "react";
import useJobs from "../hooks/useNews";
export const NewsContext = createContext();

function GetNews ({ children }) {
    
    const [newsID, setNewsID] = useState();
    const [loading, response, error] = useJobs(newsID);
    
    return (
        <NewsContext.Provider value={{ loading, response, error, setNewsID }}>
            {children}
        </NewsContext.Provider>
    )
}

export default GetNews;