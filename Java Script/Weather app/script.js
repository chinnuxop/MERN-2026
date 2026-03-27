const apiKey = "YOUR_API_KEY"; // replace with your API key

async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter a city";
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    result.innerHTML = `
      <p><b>City:</b> ${data.name}</p>
      <p><b>Temperature:</b> ${data.main.temp} °C</p>
      <p><b>Weather:</b> ${data.weather[0].main}</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Wind:</b> ${data.wind.speed} km/h</p>
    `;
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
}