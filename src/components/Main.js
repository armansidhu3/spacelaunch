import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "./Header";
import Content from "./Content";
import Launch from "./Launch";
import Button from "./Button";
import Countdown from "./Countdown";

const Main = () => {
    const [launch, setLaunch] = useState();

    const api_call = async () => {
        const url = `https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?mode=detailed&limit=20`;
        const request = axios.get(url);
        const response = await request;

        // console.log(response.data.results)

        setLaunch(response.data.results);
    }


    

    useEffect(api_call, []);
    

    return (
        <div className="main">
            <Header />
            <Content>
                {launch && <Launch launch={launch}/>}
            </Content>
        </div>
    );
}

export default Main;