# Doctor Lookup

#### Exercise in JavaScript, APIs, promises 3.23.18

#### Emily Watkins

## Description

This application shows local doctors available based on a user's input of either a medical issue, a doctor's name, or both.

## Setup

Clone this repository and navigate to root directory.

To install dependencies:

`$ npm install`  

To call API, visit https://developer.betterdoctor.com/ to get a free key. Navigate to src/doctor.js file and replace `${key}` with your API key in the url.

To run program and open in browser:

`$ npm run start`



## Functionality

* User can search local doctors by medical issue.
  - Input: broken arm
  - Example output:

  Kirk Wong
Practice: Vancouver Clinic Inc  
Accepting new patients? true  
1 N Center Court St  
Portland, OR 97227  
5037326863  
Website: http://www.reboundmd.com/

* User can search local doctors by name.
  - Input: Lyn
  - Example output:

  Lyn Jacobs
Practice: Lyn Jacobs, MD  
Accepting new patients? true  
3201 19th Ave  
Forest Grove, OR 97116  
5033595564  

* User can search by both name and issue to return more narrowed results.

* If a search returns no results, a message is displayed to the user.
  - Input: Bobby, Bugs
  - Output: This search returned no results

* If there is an API error, a message is displayed to the user.
  - Status: anything other than 200
  - Output: error


## Technologies Used

* JavaScript
* JQuery
* HTML
* Webpack

## Known Bugs
When the doctor's practice does not have a website, "undefined" is returned.  
Accepting new patients returns 'true' or 'false', ideally would return 'yes' or 'no'.

## License

Licensed under the MIT License.

Copyright (c) 2018 Emily Watkins
