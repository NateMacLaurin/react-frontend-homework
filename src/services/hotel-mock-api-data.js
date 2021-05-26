    //need to define necessary data from the actual API to simulate:
    
    /*
        For Error handling
    success
        For HotelCard base render
        Also for map function in HotelList
    results.hotel[i].id
    results.hotel[i].rewards.miles
    results.hotels[i].lowestAveragePrice.symbol
        Also for sort service (ASC price, DESC price)
    results.hotels[i].lowestAveragePrice.amount
        TODO: How to handle 404 errors from the image URL servers?
    results.hotels[i].hotelStaticContent.url
        Also for filter service
    results.hotels[i].name
    results.hotels[i].neighborhoodName
        For HotelCard select render
    results.hotels[i].stars
        Also for sort service (DESC rating)
    results.hotels[i].rating
    results.hotels[i].numberOfReviews
        NOTE: description wasn't included in the initial api format, but i want it for the select render
    results.hotels[i].description

    {
        "success": true,
        "results": {
            "total": 1,
            "hotels": [
                {
                    "id": "907",
                    "rewards": {
                    "miles": 10000
                    },
                    "lowestAveragePrice": {
                    "currency": "USD",
                    "symbol": "&#36;",
                    "amount": 579.0
                    },
                    "hotelStaticContent": {
                        "hotelId": 907,
                        "languageCode": "en",
                        "mainImage": {
                        "category": "EXTERIOR",
                        "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg",
                        "source": "VFML"
                    },
                    "name": "Omni Chicago Hotel & Suites Magnificent Mile",
                    "neighborhoodName": "Magnificent Mile",
                    "address": {
                        "line1": "676 North Michigan Avenue",
                        "line2": null,
                        "city": "Chicago",
                        "stateName": "Illinois",
                        "stateCode": "IL",
                        "countryName": "United States",
                        "countryCode": "US",
                        "zipCode": "60611",
                        "latitude": 41.89475,
                        "longitude": -87.62465,
                        "timeZoneId": "America/Chicago"
                    },
                    "stars": 4,
                    "rating": 9,
                    "numberOfReviews": 685,
                    "brandCode": "1324",
                    "brandName": "Omni Hotels",
                    "propertyType": 204,
                    "propertyTypeName": "Hotel"
                    }
                }
            ]
        }
    }

    TO

    {
        "success": true,
        "results": {
            "total": 3,
            "hotels": [
                {
                    "id": "1",
                    "rewards": {
                        "miles": 10000
                    },
                    "lowestAveragePrice": {
                        "symbol": "&#36;",
                        "amount": 699.0
                    },
                    "hotelStaticContent": {
                        "mainImage": {
                            "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                        },
                        "name": "Omni Chicago Hotel & Suites Magnificent Mile",
                        "neighborhoodName": "Magnificent Mile"
                    },
                    "description":"Placeholder Description.",
                    "stars": 4,
                    "rating": 8,
                    "numberOfReviews": 230
                },
                {
                    "id": "2",
                    "rewards": {
                        "miles": 5000
                    },
                    "lowestAveragePrice": {
                        "symbol": "&#36;",
                        "amount": 479.0
                    },
                    "hotelStaticContent": {
                        "mainImage": {
                            "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                        },
                        "name": "Omni Chicago Hotel & Suites Magnificent Mile",
                        "neighborhoodName": "Magnificent Mile"
                    },
                    "description":"Placeholder Description.",
                    "stars": 2,
                    "rating": 8,
                    "numberOfReviews": 1147
                },
                {
                    "id": "3",
                    "rewards": {
                        "miles": 7500
                    },
                    "lowestAveragePrice": {
                        "symbol": "&#36;",
                        "amount": 529.0
                    },
                    "hotelStaticContent": {
                    "mainImage": {
                        "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                    },
                    "name": "Omni Chicago Hotel & Suites Magnificent Mile",
                    "neighborhoodName": "Magnificent Mile"
                    },
                    "description":"Placeholder Description.",
                    "stars": 3,
                    "rating": 9,
                    "numberOfReviews": 685
                }
            ]
        }
    }    

        Noticed the actual API has slightly different data, notably a description, amentities, and phone number, so i'm going to pull a description too into the select

    {"success":true,
        "results":{
            "total":20,
            "hotels":[{
                "id":"907",
                "rewards":{
                    "miles":10000
                },
                "lowestAveragePrice":{
                    "currency":"USD",
                    "symbol":"&#36;",
                    "amount":579.0
                },
                "hotelStaticContent":{
                    "hotelId":907,
                    "languageCode":"en",
                    "mainImage":{
                        "category":"EXTERIOR",
                        "url":"http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg",
                        "source":"SOURCE1"
                },
                "name":"Omni Chicago Hotel & Suites Magnificent Mile",
                "neighborhoodName":"Magnificent Mile",
                "address":{
                    "line1":"676 North Michigan Avenue",
                    "line2":null,
                    "city":"Chicago",
                    "stateName":"Illinois",
                    "stateCode":"IL",
                    "countryName":"United States",
                    "countryCode":"US",
                    "zipCode":"60611",
                    "latitude":41.89475,
                    "longitude":-87.62465,
                    "timeZoneId":"America/Chicago"
                },
                "description":"This luxury hotel is located in the centre of Chicago on the prestigious Gold Coast and a few minutes walk from the Magnificent Mile. 46 suites and 239 double rooms are located on 17 storeys and can be reached by lift. Check-in and check-out are possible at any time at the 24-hour reception desk. Amenities available at the hotel include a safe and a cash machine. Wireless internet access is provided in public areas. The hotel has wheelchair-accessible facilities. A fireplace creates a cosy atmosphere. Additional amenities include a TV room and a library. Guests arriving by car can park their vehicles in the garage or in the car park. Further services and facilities include room service and a laundry service. Air conditioning and individually adjustable heating ensure that rooms maintain comfortable temperatures. All rooms are carpeted and include a double bed, a queen-size bed or a king-size bed. A safe, a minibar and a desk are also available. Additional features include a refrigerator, a mini fridge and a tea/coffee station. An ironing set is provided for guests' convenience. A direct dial telephone, a TV, a radio and WiFi are provided as well. A hairdryer and bathrobes are available in the bathrooms, which are equipped with a shower and a bathtub. The hotel has 285 non-smoking rooms. Guests can enjoy a selection of sport and entertainment options. There are many ways to relax or stay active at the hotel, including cycling/mountain biking and a gym. Parents can unwind while the kids can participate in an entertainment programme full of fun activities. Various dining options are available, including a dining room, a café and a bar. A number of specialities await guests in the air-conditioned, non-smoking restaurant.",
                "amenities":[
                    {"name":"Parking"},
                    {"name":"Restaurant"},
                    {"name":"Pets Allowed"},
                    {"name":"Room Service"},
                    {"name":"Meeting Banquet Facilities"},
                    {"name":"Bar"},{"name":"24 Hour Front Desk"},
                    {"name":"Gym"},{"name":"Golf"},{"name":"Non-Smoking"},
                    {"name":"Business Center"},{"name":"Laundry"},
                    {"name":"Handicapped Access"},{"name":"Internet Access"},
                    {"name":"Elevators"},{"name":"Express Check In"},
                    {"name":"Safe"},{"name":"Valet Parking"},
                    {"name":"Heated Guest Rooms"},
                    {"name":"A/C"},
                    {"name":"ATM"},{"name":"Concierge"}
                ],
                "phoneNumber":"5555550000",
                "stars":4,
                "rating":9,
                "numberOfReviews":685,
                "brandCode":"1324",
                "brandName":"Omni Hotels",
                "propertyType":204,
                "propertyTypeName":"Hotel"
            }]
        }
    }
    */
const mockHotelData =   {
    "success": true,
    "results": {
        "total": 3,
        "hotels": [
            {
                "id": "1",
                "rewards": {
                    "miles": 10000
                },
                "lowestAveragePrice": {
                    "symbol": "&#36;",
                    "amount": 699.0
                },
                "hotelStaticContent": {
                    "mainImage": {
                        "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                    },
                    "name": "Omni Chicago Hotel & Suites Magnificent Mile",
                    "neighborhoodName": "Magnificent Mile"
                },
                "description":"Placeholder Description1.",
                "stars": 4,
                "rating": 8,
                "numberOfReviews": 230
            },
            {
                "id": "2",
                "rewards": {
                    "miles": 5000
                },
                "lowestAveragePrice": {
                    "symbol": "&#36;",
                    "amount": 479.0
                },
                "hotelStaticContent": {
                    "mainImage": {
                        "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                    },
                    "name": "TestName2",
                    "neighborhoodName": "TestNeighborhood2"
                },
                "description":"Placeholder Description2.",
                "stars": 2,
                "rating": 8,
                "numberOfReviews": 1147
            },
            {
                "id": "3",
                "rewards": {
                    "miles": 7500
                },
                "lowestAveragePrice": {
                    "symbol": "&#36;",
                    "amount": 529.0
                },
                "hotelStaticContent": {
                    "mainImage": {
                    "url": "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"
                    },
                    "name": "TestName3",
                    "neighborhoodName": "TestNeighborhood3"
                },
                "description":"Placeholder Description3.",
                "stars": 3,
                "rating": 9,
                "numberOfReviews": 1685
            }
        ]
    }
}    

    //export the mock data so tests and components can use it in lieu of the actual api data
export default mockHotelData;