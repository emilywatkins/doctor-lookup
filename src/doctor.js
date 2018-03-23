import $ from 'jquery';

export function getData() {

  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=0f6e819a206733bb1e906a5564e0548e';
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
