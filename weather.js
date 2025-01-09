let city = document.querySelector("#city-name")
let btn = document.querySelector("#search-btn");
let input = document.querySelector("#city-input");
let temp = document.querySelector("#temperature");
let desc = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");




btn.addEventListener("click", async()=>{
    let promise = fetch(`http://api.weatherstack.com/current?access_key=b07bcf4831052872debe9d485ad91afe&query=${input.value}`);
    let respose = await promise;
    let output = await respose.json();
    // console.log(input.value);
    console.log(output); 
    if(input.value == ''){
        alert("Enter the City");
    }
    else if(output.error){
        city.innerText = `${input.value} does not exist`;
        temp.innerText = "Temperature: --°C"
        desc.innerText = "Description: --"
        humidity.innerText = "Humidity: --%"
        wind.innerText = "Wind Speed: -- km/h"
    }
   
    else{
    city.innerText = input.value
    temp.innerText =`Temperature: ${output.current.temperature}°C`
    desc.innerText = `Description: ${output.current.weather_descriptions}`
    humidity.innerText =`Humidity: ${output.current.humidity}%`
    wind.innerText = `Wind Speed: ${output.current.wind_speed}km/h`
    }
})



