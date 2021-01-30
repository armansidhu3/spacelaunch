import React, {useEffect} from "react";
import Countdown from "./Countdown";
import axios from "axios";

const Launch = ({launch}) => {
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    let records = {};

    // var selectedMonthName = months[value['month']];
    let year, month, day, time;    
    var d;

    // launch.forEach(bla);

    function parseDate(i) {

    d = new Date(i.net)

    return months[d.getUTCMonth()] + " " + d.getUTCDate() + " " + d.getUTCFullYear() + " " + d.getUTCHours() + ":" + d.getUTCMinutes() + " UTC";
    }

    function localDate(i) {
        d = new Date(i.net)

        let timezone = "GMT" + createOffset(d);
    
        return months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + " | " + formatAMPM(d) + " " + timezone;
    }

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }
    function createOffset(date) {
        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        var offset = Math.abs(date.getTimezoneOffset());
        var hours = pad(Math.floor(offset / 60));
        var minutes = pad(offset % 60);
        return sign + hours + ":" + minutes;
    }
    
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    
    function parseDescription(index) {
        if (launch[index].mission != null) return launch[index].mission.description;
        return "";
    }

    // const vid_url = async (url) => {
    //     if (!url) {
    //         console.log("")
    //         return "";
    //     }
    //     let new_url = url.substring(4);
    //     new_url = "https" + new_url;
    //     const response = "";
    //     const request = "";

    //     try {
    //     request = axios.get(new_url)
   
    //     response = await request;

    // } catch(error) {
    //     console.log("")
    //     return "";
    // }
    //     console.log(response);

    //     if (!response) {
    //         console.log("")
    //         return "";
    //     }

    //     if (response.data.vidURLs.length > 0) {
    //         console.log("Live link:" + response.data.vidURLs[0].url)
    //         return response.data.vidURLs[0].url;
    //     }
    //     console.log("");
    //     return "";
    // }

    function liveURL(url) {
        if (typeof url !== 'undefined'  && url.length > 0) {
            return <a href={url[0].url} target="_blank"><button><p>Live webcast</p></button></a>
        }
    }

    return (
        <div className="launch">
            {launch.map((i, index) => 
            {
                if (i.image != null && new Date(i.net) > new Date()) {
                    return ( 
                <div className="rockets">
                 <h2>{i.name}</h2>
                <img src={i.image} alt={i.name} width="500px"></img>
                <p>{i.launch_service_provider.name}</p>
                <p>{i.pad.name}</p>
                <div className="description">
                    {parseDescription(index)}
                </div>
                <p>Time until: {localDate(i)}</p>
                { <Countdown date={parseDate(i)} /> }
                {liveURL(i.vidURLs)}
                </div>
                    )
                }
            }
                )
            }
        </div>
    );
}

export default Launch;