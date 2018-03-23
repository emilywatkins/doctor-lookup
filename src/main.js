import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from './doctor.js'


$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    let promise = getData();
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('#doctor-data').text(`Response body: ${body.data[0].profile.bio}`);
    }, function(error) {
      $('#doctor-data').text('error');
    });
  });

});
