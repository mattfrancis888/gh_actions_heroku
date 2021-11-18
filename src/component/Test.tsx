import React, { useEffect, useState } from "react";

import axios from "../axiosConfig";

const Test: React.FC = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(`/test`);
            console.log("red sauce", response.data);
        };

        fetchData();
    }, []);
    return <nav>Hi</nav>;
};
export default Test;
