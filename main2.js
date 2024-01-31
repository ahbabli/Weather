


const apiKey = "ec9038bff3bd064bcda37e6dc35f368f";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=yemen';


async function checkWeather(){
    
    const response = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    console.log(new Date(data.dt*1000-(data.timezone*1000)));
    }
    
   console.log(Date(3600));



    checkWeather();
   

