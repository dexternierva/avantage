import React from "react";
import OtherJobs from "../../components/OtherJobs/OtherJobs.components";
import Query from "../../components/Query";
import JOBS_QUERY from "../../queries/job/jobs";

const FeaturedJobContainer = () => {
    return (
        <>
            <Query query={JOBS_QUERY}>
                {({ data: { jobs } }) => {
                    return <OtherJobs otherjobs={jobs} />;
                }}
            </Query>
        </>
    );
};

export default FeaturedJobContainer;