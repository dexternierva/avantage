import React from "react";
import FeaturedJob from "../../components/FeaturedJob/FeaturedJob.components";
import Query from "../../components/Query";
import JOBS_QUERY from "../../queries/job/jobs";

const FeaturedJobContainer = () => {
    return (
        <>
            <Query query={JOBS_QUERY}>
                {({ data: { jobs } }) => {
                    console.log("jobs", jobs);
                    return <FeaturedJob jobs={jobs} />;
                }}
            </Query>
        </>
    );
};

export default FeaturedJobContainer;