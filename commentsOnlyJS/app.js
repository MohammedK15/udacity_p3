// // Personal API Key for OpenWeatherMap API
// const baseUrl = 'api.openweathermap.org/data/2.5/weather';
// const apiKey = '25b7a4527f77b209b126a463a9baa9c0';
//
//
// // Event listener to add function to existing HTML DOM element
// document.getElementById('generate').addEventListener("click", getCurrentWeather);
//
//
// /* Function called by event listener */
// function getCurrentWeather() {
//     console.log('clicked');
//     // const enteredZipCode = document.getElementById('zip').value;
//     const zipCode = document.getElementById('zip').value;
//     const apiCall = baseUrl + '?zip=' + zipCode + '&appid=' + apiKey;
// }
// /* Function to GET Web API Data*/
// const getWeatherAPI = async (fullApiUrl) => {
//     const response = await fetch(fullApiUrl);
//     try {
//         const data = await response.json();
//         console.log(data);
//         return data;
//     }catch (e) {
//         alert('Error: ' + e);
//     }
// }
// /* Function to POST data */
//
//
// /* Function to GET Project Data */
