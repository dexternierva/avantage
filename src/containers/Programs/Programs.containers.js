import React from "react";
import Programs from "../../components/Jobs/Jobs.components";
import Query from "../../components/Query";
import PROGRAMS_QUERY from "../../queries/programs/programs";

const Home = () => {
    return (
        <>
            <Query query={PROGRAMS_QUERY}>
                {({ data: { programs } }) => {
                    return <Programs programs={programs} />;
                }}
            </Query>
        </>
    );
};

export default Home;