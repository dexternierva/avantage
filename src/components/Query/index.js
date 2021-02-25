import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import styled from "styled-components";

const LoadingWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
`;

const Loading = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
`;

const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id }
    });

    if (loading) return <LoadingWrap><Loading><Loader type="Bars" color="#047CC7" height={100} width={100} timeout={3000} /></Loading></LoadingWrap>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default Query;