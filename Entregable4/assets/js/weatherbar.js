
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherData);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  async function getWeatherData(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
  
    let response;
  
    try {
      response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=" +
          lat +
          "&lon=" +
          lon +
          "&limit=1&appid=13fd320ea826dcf519670ed2757e0cf6"
      );
    } catch (error) {
      console.log("There was an error", error);
    }
  
    if (response?.ok) {
      const data = await response.json();
      document.getElementById("weatherBar").style.display = "block";
      document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + " C°";
      document.getElementById("city").innerHTML = data.name;
      document.getElementById("main").innerHTML = data.weather[0].main;
  
      document.getElementById("mainImage").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
      document.getElementById("humidity").innerHTML = data.main.humidity + "%";
      document.getElementById("wind").innerHTML = data.wind.speed + " m/s";
  
    } else {
      console.log(`HTTP Response Code: ${response?.status}`);
    }
  }
  
  function hideWeatherBar() {
    document.getElementById("weatherBar").style.display = "none";
  }