import React, { useState, createContext } from "react";
import useJobs from "../hooks/useJobs";
export const JobsContext = createContext();

function GetJobs ({ children }) {
    
    const [jobID, setJobID] = useState();
    const [loading, response, error] = useJobs(jobID);
    
    return (
        <JobsContext.Provider value={{ loading, response, error, setJobID }}>
            {children}
        </JobsContext.Provider>
    )
}

export default GetJobs;