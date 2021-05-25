import axios from 'axios';

class HotelResultService {
    get() {
        return axios
            .get('http://localhost:8080/rest/rates')
            .then(response => response.data)
            .catch((err) => {console.log(`An error has occured in the API get: ${err}`)})
    }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
