var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fd901f3c065cfd8d888b2f0c82390e6d&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.cod && res.message) {
        throw new Error(res);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
		console.log(res);
      throw new Error(res);
    });
  }
}
