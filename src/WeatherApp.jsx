import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:null,
        feelslike:null,
        temp:null,
        tempMin:null,
        tempMax:null,
        humidity:null,
        weather:null
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        <>
            <div style={{textAlign:"center"}}>
                <h2>Weather App</h2>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo}/>
            </div>
        </>
    )
}