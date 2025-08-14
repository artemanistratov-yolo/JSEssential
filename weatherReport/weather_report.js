function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value;
    const apiKey = 'cf13bb146dab67e0e126d981959c92d5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod === 200) {
          weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        } else {
          weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
  }
  
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

    // NEW FORM
  function showweatherDetailslat(event) {
    event.preventDefault();
  
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = 'cf13bb146dab67e0e126d981959c92d5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfolat = document.getElementById('weatherInfolat');
        if (data.cod === 200) {
          weatherInfolat.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        } else {
          weatherInfolat.innerHTML = `<p>City not found. Please try again.</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        document.getElementById('weatherInfolat').innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
  }
  
  document.getElementById('weatherFormlat').addEventListener('submit', showweatherDetailslat);
  