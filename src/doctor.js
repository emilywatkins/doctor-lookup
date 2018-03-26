import $ from 'jquery';

export function getData() {

  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let key = process.env.exports.apiKey;
    let queryInput = $('#query').val();
    let query = queryInput.replace(/ /g,"%20");
    let nameInput = $('#name').val();
    let name = nameInput.replace(/ /g,"%20");
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=45.5231%2C-122.6765%2C25&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=${key}`;

    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });





}
