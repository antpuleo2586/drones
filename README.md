# drones
~Ant's~ Bob's Epic Drone Shack Inc

## Demo
A viewable demo of the app can be found [here](https://ants-drones.herokuapp.com/).

## Installation

To install, download the source code, or git clone the repository, and run `yarn install`

## Run 

To run the app, run `yarn start`

## Submission details

(i) One assumption I made was that we would be using Javascript and the React library; this was purely because of the job spec, my own experience with React and its support and popularity at the moment.



(ii) There is some technical debt in that: text needs to be extracted out for potential translations, styling could probably be done more consistently and with colours, sizes extracted out into variables and the action for fetching drones makes some assumptions about the shape of the data returned. 

I think some refactoring could solve most of these problems. Perhaps a dedicated client for the API, instead of calling axios in the actions, would be a better idea for re-usability and to decouple this app from the API internals somewhat.

(iii) To run the code, simply run `yarn start` at the command line after downloading the source code.

(iv) I think the power of the redux middleware is quite great and so it could be leveraged for other future features such as more robust error handling, throttling, debouncing etc. The filter system also needs work and perhaps a slider could allow users to select their own custom ranges.

## Notes

I added a filter feature, but perhaps I was confused as to how the % ranges work; I thought that to receive 0-10% crash rate, an API call to ` /api/v0/drones/risky/0/10` would achieve this, but it doesn't return what I expected, so maybe I got this wrong.