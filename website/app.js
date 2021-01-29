// Personal API Key for OpenWeatherMap API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '25b7a4527f77b209b126a463a9baa9c0';
const unit = '&units=metric';


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener("click", getCurrentWeather);


/* Function called by event listener */
function getCurrentWeather() {
    // const enteredZipCode = document.getElementById('zip').value;
    const zipCode = document.getElementById('zip').value;
    const apiCall = baseUrl + '?zip=' + zipCode + '&appid=' + apiKey + unit;
    // const apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=94040&appid=25b7a4527f77b209b126a463a9baa9c0';
    getWeatherAPI(apiCall)
        .then(function (d){
            postData('/send', d)
                .finally(updateUI)});
}

/* Function to GET Web API Data*/
const getWeatherAPI = async (fullApiUrl) => {

    const response = await fetch(fullApiUrl);
    try {
        return await response.json();
    }catch (e) {
        alert('Error: ' + e);
    }
}

/* Function to POST data */
const postData = async(URL = '/send', data = {}) => {
    const userFeeling = document.getElementById('feelings').value;
    let date = new Date();
    let newD = date.getDate() + '/' + date.getMonth()+1 + '/' + date.getFullYear();

    const payload = {
        temp: data.main.temp,
        date: newD,
        userFeel: userFeeling,
    };

    const response = await fetch(URL , {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    try{
        return await response.json();

    }catch (e) {
        alert('Error post res: ' + e)
    }
}

/* Function to Update the UI */
const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = 'Today date: ' + allData.data.date;
        document.getElementById('temp').innerHTML = 'Temperature: ' + allData.data.temp + 'c';
        document.getElementById('content').innerHTML = 'Feeling like: ' + allData.data.userFeel;
    }catch(error){
        console.log("error", error);
    }
}