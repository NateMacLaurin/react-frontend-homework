# Rocketmiles - React Technical Assesment

## Notes:

To get things started I decided to break down components for the first requirement, how will they need to scale? What functionality can be grouped? 

I wanted to be able to test the backend get request, so I set up a mock axios get function with Jest, but I was getting a "RegeneratorRuntime-is-not-defined" error. Turns out Babel transform runtime needs to be installed to test promises.
Once I ran tests on the Axios API call to get hotel data, and have ensured we're targeting the correct address, we're only calling GET once, and we're getting expected data back, I am ready to look at component structure.

After jumping the gun and breaking the app component out into the planned HotelFilterInput and HitelList components on master, I created a feature branch for the rest of the components skeletons. While creating components, I'm continuing to utilize index.js files to simplify component imports across the app. While building out the component skeletons, I decided to combine the HotelBackendError and HotelFilterError components into one HotelError component with a passed error prop, which will allow the component to be used for other errors should the need arise.

I utilized the example API data to create a mock api dataset for unit tests. I'm implementing this in unit tests in the hotel-input services, and through a test and debug flag in App on the initial API call so that I can avoid calling the live API while building out the component structure since react re-renders on change. This will allow me to take advantage of viewing the live frontend changes without spamming the public API. Though, I'll need to make sure I test the 500 error handling that comes every 20 calls.

I started structuring the hotel-input-services, then decided to diverge to js function exports instead of using the new angular service structure since I am familiar with that. At this point I set up some on render tests and ran them, at which point I encountered two failures in my HotelList and HotelCard components because they both experience exceptions since they are rendering API data which is not passed in the test. In order to resolve this, I passed the test API data on props to the tested component.

In order to efficiently test inputs and outputs from my mock data in jest, I set up static arrays of what the data is expected to be. This ended up working great to organize different unit tests to cover many different pieces of the code and keep inputs and outputs grouped together while maintaining scalability of the tests.

After I finished building out the Input sort and filter function tests, I wrote the input UI in the HotelFilterInput component. A bit rusty on react state management without redux, and I had to refactor some of the tests to maintain data structure consistency with the actual app hotel data passed on props to children.

Getting the components to render properly took a bit of effort, I decided to forgo any useEffect hooks and stuck to event controlled functions, which worked great! While testing various input methods, I discovered that it is necessary in my implementation to nest the filter function inside the sort function. This was required because the filter function calls the full hotel data prop each time. I'm calling the full hotel data prop because I need to regain hotels that were previously filtered out if I backspace the input. Future implementation might use the useRefs hook to store the previous sorted arrays to avoid calling the hotel prop each time I filter.

Next on my TODO list, I built out the HotelCard select button and chose to display the details text, as well as the rating and reviews, which are multiplied for a weighted value in my "Recommended" filter. At this point, I decided
to try loading the live API to ensure everything I've built so far scales to the live API calls, especially since react hooks occur asynchronously. I greatly appreciated my choice to use a "test" flag in my App component to make calling the test API and live API data very simple! My sort and filter functions worked immediately, but the details, ratings, and reviews would not render. Upon further investigation, I had built the test hotel object prototype out slightly incorrectly, which was an easy fix. I also chose to add a quick blank image placeholder ternary so that the images returning 404 fail gracefully to the user.

Handling errors, I am passing a flag on props from the API call error in app so that I can render a button in the error component and reset the flag to re-render app and re-try the API call. Additionally, I chose to render a span with error context text for the user. In order to test error handling, I diverged from TDD at this point and instead chose to use a global flag to manipulate the data. The global flag is useful for live testing, and when I have more time, I plan to research how to implement TDD on the react lifecycle.

Tests and time issues.

The last thing on my list is to do a bit of styling and commenting. For styling, I checked out the rocket page and grabbed your rocket orange color, which I am using on all user interactable objects as well as the price to draw focus. I also researched its color complement and am using that for the 
background.

If I had more time, future features would include responsive design implementation, integration testing of the react lifecycle components, and more sorting capabilities based on the plethora of hotel data available from the API.

### Issues:
While setting up my environment, I ran into a couple issues in my win10x64 environment.

### Error:
I received an error: 

"Cannot read property 'length' of undefined
 at lineCounter (C:\Users\Nate\Documents\Programs\react-frontend-homework\node_modules\parcel-bundler\src\utils\lineCounter.js:3:30)" 

When attempting npm start after installing node modules

### Resolution: 
I deleted .cache directory in the root project folder and re-ran npm start.

### Error:
When running docker build -t rocketmiles/react-backend-api . I received an error:
```
"#9 [build 4/4] RUN ./gradlew build --no-daemon
#9 sha256:c3477be12699aec7ae00b14ea7d916ba08a59ae08757c3d95c062ad266717fc6
#9 0.179 /usr/bin/env: ‘sh\r’: No such file or directory
#9 ERROR: executor failed running [/bin/sh -c ./gradlew build --no-daemon]: exit code: 127"
```

### Resolution:

Installed gradle 7.0.2 for winx64 on host PC, set up gradle env var, and ran "gradle wrapper" from gitbash, then re-ran provided docker command.


## Instructions: 
See also: instructions.pdf

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle
```bash
./gradlew clean bootRun
```

####  To Run backend API using Docker
- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`

#### Instructions: 
Checkout instructions.pdf