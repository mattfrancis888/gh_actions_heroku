import React, { useEffect, useState } from "react";

import axios from "../axiosConfig";

const Test: React.FC = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            // let response = await axios.get(`/test`);
            // console.log("red sauce", response.data);
            // let response2 = await axios.post(`/my-food`);
            // console.log("red sauce 2", response2.data);
        };

        fetchData();
    }, []);
    return <nav>Hi</nav>;
};
export default Test;
