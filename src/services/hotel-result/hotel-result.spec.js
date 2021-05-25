import mockAxios from "axios";
import HotelResultService from './hotel-result.service';

describe('HotelResultService', () => {
    it('is a singleton', () => {
        expect(HotelResultService).toBeTruthy();
    });

    it('calls axios and returns data', async () => {

        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({
                data: {
                    results: ["placeholder.jpg"]
                }
            })
        );

        const hotelResultData = await HotelResultService.get();
        console.log(hotelResultData);
    });
});