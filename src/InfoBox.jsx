import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }){
    const init_url="https://images.unsplash.com/photo-1567448786891-efeeb717a231?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const cold_url="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const hot_url='https://media.istockphoto.com/id/1325895908/photo/asian-woman-drying-sweat-in-a-warm-summer-day.jpg?s=1024x1024&w=is&k=20&c=tSGtyuisfaCEzumKzlH39YQUR-uwo2LcuL0rBxoFhyI=';

    const rain_url="https://plus.unsplash.com/premium_photo-1700131051396-307a36e3ef85?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const cloud_url="https://images.unsplash.com/photo-1594156596782-656c93e4d504?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const fog_url="https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const storm_url="https://images.unsplash.com/photo-1527572232473-494f1e9c7917?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherImage = () => {
        if ( !info || !info.city ) return init_url;
        if (info.humidity > 80) return rain_url;
        if (info.weather.includes("storm")) return storm_url;
        if (info.weather.includes("cloud")) return cloud_url;
        if (info.weather.includes("fog")) return fog_url;
        return info.temp > 15 ? hot_url : cold_url;
    };

    return (
        <>
            <div className="InfoBox">
                <div className="cardContainer">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getWeatherImage()}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                        <p>🌡️ Temperature: {info.temp}°C</p>
                        <p>💧 Humidity: {info.humidity}%</p>
                        <p>📉 Min Temp: {info.tempMin}°C</p>
                        <p>📈 Max Temp: {info.tempMax}°C</p>
                        <p>🌤️ Condition: <i>{info.weather}</i></p>
                        <p>The weather can be described as <i>{ info.weather }</i> and feels like { info.feels_like }&deg;C </p>
                        </Typography>
                    </CardContent>
                    </Card>
                </div>
                
            </div>
        </>
    )
}