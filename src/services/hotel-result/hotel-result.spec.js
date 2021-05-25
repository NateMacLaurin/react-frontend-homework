    //mock module defined in ../../__mocks__
import mockAxios from "axios";

    //service to test
import HotelResultService from './hotel-result.service';

describe('HotelResultService', () => {
    it('is a singleton', () => {
        expect(HotelResultService).toBeTruthy();
    });

    it('calls the API with Axios GET and returns data once from the specified address', async () => {
        
            //override mock Axios GET implementation
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({
                data: {
                    results: ["placeholder.jpg"]
                }
            })
        );

            //make the mock API call to test
        const hotelResultData = await HotelResultService.get();

            //Axios GET was only called once.
        expect(mockAxios.get).toHaveBeenCalledTimes(1);

            //Called Axios GET with the correct address.
        expect(mockAxios.get).toHaveBeenCalledWith("http://localhost:8080/rest/rates");

            //Axios GET successfully returned data.
        expect(hotelResultData).toEqual({"results": ["placeholder.jpg"]});
    });
});