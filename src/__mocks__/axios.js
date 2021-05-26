    //creating a mock Axios module to simulate axios get request in testing.
export default {
    get: jest.fn(() => Promise.resolve(
        { data: {} }
        ))
};