import React from "react";
import Countdown from "./Countdown";

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
        return months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + " | " + formatAMPM(d);
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

    return (
        <div className="launch">
            {launch.map((i, index) => 
            {
                if (i.image != null && new Date(i.net) > new Date()) {
                    return ( 
                <div className="rockets">
                 <h2>{i.name}</h2>
                <img width="500px" src={i.image}></img>
                <p>{i.launch_service_provider.name}</p>
                <p>{i.pad.name}</p>
                <div className="description">
                    {parseDescription(index)}
                </div>
                <p>Time until: {localDate(i)}</p>
                { <Countdown date={parseDate(i)} /> }
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