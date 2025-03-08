import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const api_url = import.meta.env.VITE_API_URL;
    const api_key = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            const response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            const coordiData = await response.json();

            if (!coordiData || !coordiData.main) {
                throw new Error("Invalid city name");
            }

            let result = {
                city: city,
                temp: coordiData.main.temp,
                tempMin: coordiData.main.temp_min,
                tempMax: coordiData.main.temp_max,
                humidity: coordiData.main.humidity,
                feelsLike: coordiData.main.feels_like,
                weather: coordiData.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            setError(true);
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity(""); 
        }
    };

    return (
        <div className="SearchBox">
            <h1>Search for the weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    name="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    onChange={handleChange} 
                    value={city} 
                /><br /><br />
                <Button type="submit">Search</Button>
            </form>
            {error && <p style={{ color: "red" }}>This city doesn't exist in the database</p>}
        </div>
    );
}
