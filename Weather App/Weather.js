
const form = document.querySelector("form");
const input = document.querySelector("#cityInput");
const msg = document.querySelector(".msg");
const list = document.querySelector(".weatherWindow .cities");
const div1 = document.querySelector(".weatherWindow");
// next 2 lines new code
const weatherForm = document.getElementById('cityName')

const weatherByDay = [[], [], [], [], []]
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/

const apiKey = "bd88c87a2a76a7e03d2f6781859f5ee7";
// const key = newDate(1662292800).toLocaleDateString();
// console.log(key);
form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

 fetch(url)
   .then(response => response.json())
   .then(data => {
    const { main, name, sys, weather } = data;
     const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
       weather[0]["icon"]
     }.svg`;

     const li = document.createElement("li");
     li.classList.add("city");
     console.log(data);
    
     

    const weatherByDay = [[], [], [], [], []];
    const date = new Date();
    date.setDate(date.getDate() + 1);
    
    const markup = `
      <h2 class="city-name" data-name="${name},${sys.country}">  
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
      <figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }">
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
    `;

    for (let i = 0; i < weatherByDay.length; i++) {
      const element = weatherByDay[i];

      element.push(markup);
    }

     li.innerHTML = weatherByDay;
     list.appendChild(li);
   })
   .catch(() => {
     msg.textContent = "Please search for a valid city";
   });
});
 msg.textContent = "";
 form.reset();
 input.focus();