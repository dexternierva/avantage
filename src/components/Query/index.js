import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import styled from "styled-components";

const Loading = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
`;

const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id }
    });

    if (loading) return <Loading><Loader type="Bars" color="#047CC7" height={100} width={100} timeout={3000} /></Loading>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default Query;