let sBox = document.querySelector(".search-box");
let sBtn = document.querySelector(".btn");
let imgIcon = document.querySelector(".weather-icon");
let bigImage = document.querySelector(".imgs");
let smallImage = document.querySelector(".imgs2");
let fImage = document.querySelector(".img1");
let phoneImage = document.querySelector(".img12");
let sImage = document.querySelector(".img2");
let thImage = document.querySelector(".img3");


const apiKey = "ec9038bff3bd064bcda37e6dc35f368f";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


async function checkWeather(city){
    
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`);
   
    if(response.status == 404){
        bigImage.classList.remove("show-imgs");
        smallImage.classList.remove("show-imgs");
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        let data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp);
        document.querySelector(".humidi").innerHTML = data.main.humidity+"%";
        document.querySelector(".windi").innerHTML = data.wind.speed+" km/h";
        document.querySelector(".weath").innerHTML = data.weather[0].main;

       
    
        if( data.weather[0].main == "Clouds"){

           bigImage.classList.add("show-imgs");
           smallImage.classList.add("show-imgs");
           phoneImage.src="imgs/CLOUDSPhone.svg";
           fImage.src="imgs/CLOUDS11 copy.svg";
           sImage.src="imgs/CLOUDS221 copy.svg";
           thImage.src="imgs/CLOUDS11 copy.svg";
           
           
         }
         else if (data.weather[0].main == "Rain"){
            bigImage.classList.add("show-imgs");
           smallImage.classList.add("show-imgs");
            fImage.src="imgs/rain11.svg";
            phoneImage.src="imgs/rainPhone.svg";
            sImage.src="imgs/rain22.svg";
            thImage.src="imgs/rain11.svg";
         }
         else if (data.weather[0].main == "Clear"){
           smallImage.classList.add("show-imgs");
           phoneImage.src="imgs/sun phone.svg";
           bigImage.classList.add("show-imgs");
            fImage.src="imgs/cloudyy copy.svg";
            sImage.src="imgs/sun copy.svg";
            thImage.src="imgs/cloudyy copy.svg";
         }
         else if (data.weather[0].main == "Haze"){
           smallImage.classList.add("show-imgs");
           bigImage.classList.add("show-imgs");
            fImage.src="imgs/fog11.svg";
            phoneImage.src="imgs/fogPhone.svg";
            sImage.src="imgs/fog22.svg";
            thImage.src="imgs/fog11.svg";
            
         }
         else if (data.weather[0].main == "Thunderstorm"){
           smallImage.classList.add("show-imgs");
           bigImage.classList.add("show-imgs");
            fImage.src="imgs/storm11.svg";
            phoneImage.src="imgs/stormPhone.svg";
            sImage.src="imgs/storm22.svg";
            thImage.src="imgs/storm11.svg";
         }
         else if (data.weather[0].main == "Mist"){
           smallImage.classList.add("show-imgs");
           bigImage.classList.add("show-imgs");
            fImage.src="imgs/mist copy.svg";
            phoneImage.src="imgs/mistPhone.svg";
            sImage.src="imgs/mist copy2.svg";
            thImage.src="imgs/mist copy.svg";
         }
         else if (data.weather[0].main == "Drizzle"){
           smallImage.classList.add("show-imgs");
           bigImage.classList.add("show-imgs");
            fImage.src="imgs/drizzle22.svg";
            phoneImage.src="imgs/drizzlePhone.svg";
            sImage.src="imgs/drizzle11.svg";
            thImage.src="imgs/drizzle22.svg";
         }
         document.querySelector(".weather").style.display="block";
         document.querySelector(".error").style.display="none"
        



    }
    
   
}
let clrs = ["#E2A45F","#A1D9F3","#C7B7D6","#38EFB5","#5DBAFA","#88DCC9","#B7E878","#F2DCDB","#AFF33F","#ffff"];
let bgc = ["#2A106B","#0C1E2E","#135F6C","#272D0A","#3E494B","#0D0551","#013082","none"];
let grBGC = ["rgb(38,99,135)","rgb(41,63,112)","rgb(55,41,112)",""]

function getRanNum(){
   return Math.floor(Math.random()*clrs.length);
}
sBtn.addEventListener("click",()=>{
   let randNum = getRanNum();
   // console.log(clrs[randNum]);
   checkWeather(sBox.value);
    document.querySelector(".city").style.color=clrs[randNum];
    document.querySelector(".city").style.backgroundColor=bgc[randNum];
    


});

 
