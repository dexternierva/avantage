import React from "react";
import Jobs from "../../components/Jobs/Jobs.components";
import Query from "../../components/Query";
import JOBS_QUERY from "../../queries/job/jobs";

const Home = () => {
    return (
        <>
            <Query query={JOBS_QUERY}>
                {({ data: { jobs } }) => {
                    return <Jobs jobs={jobs} />;
                }}
            </Query>
        </>
    );
};

export default Home;